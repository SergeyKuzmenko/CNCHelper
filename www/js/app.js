const $$ = Dom7;
const app = new Framework7({
  root: "#app",
  id: "app.kuzmenko.cnchelper",
  name: DB.get("settings", "name"),
  theme: DB.get("settings", "theme"),
  version: DB.get("settings", "version"),
  card: {
    swipeToClose: false
  },
  sheet: {
    backdrop: true,
    closeByBackdropClick: true,
    closeOnEscape: true
  },
  view: {
    pushState: true
  },
  data: {
    SELECTORS: [
      ".page",
      ".page-content",
      ".block",
      ".block-title",
      ".view",
      ".title",
      ".list",
      ".item-title",
      ".link",
      ".button",
      ".card-content",
      ".sh_gcode"
    ],
    tempData: []
  },
  methods: {
    to: function (url) {
      this.views.main.router.navigate(url, {
        reloadCurrent: true
      });
    },
    date: function () {
      return new Date();
    },
    currentPageName: function () {
      return this.views.main.router.currentPageEl.dataset.name;
    },
    currentUrl: function () {
      return app.views.main.router.url;
    },
    currentPath: function () {
      return app.views.main.router.currentRoute.route.url;
    },
    reloadApp: function () {
      location.reload();
    },
    selectTheme: function (theme) {
      DB.set("settings", "theme", theme);
      app.methods.reloadApp();
    },
    openPhoto: function (pathToPhoto, captionText) {
      // Hide some elements
      $$(".toolbar-bottom-md").hide();
      $$(".photo-browser-current").hide();
      $$(".photo-browser-of").hide();
      $$(".photo-browser-total").hide();
      return app.photoBrowser.create({
        photos: [
          {
            url: pathToPhoto,
            caption: captionText
          }
        ],
        theme: "dark",
        toolbar: false,
        popupCloseLinkText: "Закрыть",
        navbarOfText: "",
        url: "photo/"
      }).open();
    },
    fontSize: function (value) {
      let currentSize = parseInt(DB.get("settings", "font_size"));
      let size;
      switch (value) {
        case "minus":
          size = currentSize - 1;
          app.data.SELECTORS.forEach(function (item) {
            $$(item).css("font-size", `${size}%`);
          });
          DB.set("settings", "font_size", size);
          break;
        case "plus":
          size = currentSize + 1;
          app.data.SELECTORS.forEach(function (item) {
            $$(item).css("font-size", `${size}%`);
          });
          DB.set("settings", "font_size", size);
          break;
      }
      app.toast
          .create({
            text: `Размер текста изменено на: ${size}`,
            closeTimeout: 2000
          })
          .open();
      app.methods.logger.set(
          `App: Selected font size = ${size}`,
          app.methods.currentUrl(),
          app.methods.currentPath()
      );
    },
    applyFontSize: function (size) {
      app.data.SELECTORS.forEach(function (item) {
        $$(item).css("font-size", `${size}%`);
      });
    },
    closeApp: function () {
      app.dialog
          .create({
            title: "Закрыть приложение?",
            buttons: [
              {
                text: "Отмена",
                close: true
              },
              {
                text: "Закрыть",
                close: true,
                bold: true,
                onClick: function () {
                  window.navigator.app.exitApp();
                }
              }
            ]
          })
          .open();
    },
    logger: {
      name: "cnchelper_log",
      items: [],
      url: function () {
        return app.views.main.router.url;
      },
      get: function () {
        return JSON.parse(localStorage.getItem(this.name));
      },
      set: function (message, url = null, path = null, hardSet = false) {
        let template = {
          uid: app.utils.id(),
          date: app.methods.date(),
          path: path,
          url: url,
          message: message
        };
        // check: logger enabled or disabled
        if (DB.get("debug", "logger") || hardSet) {
          this.setLocalStorage(template);
          this.items.push(template);
          return template;
        }
      },
      getLocalStorage: function () {
        if (localStorage.getItem(this.name)) {
          this.item = JSON.parse(localStorage.getItem(this.name));
          return JSON.parse(localStorage.getItem(this.name));
        } else {
          return [];
        }
      },
      setLocalStorage: function (obj) {
        let items = this.getLocalStorage();
        items.push(obj);
        localStorage.setItem(this.name, JSON.stringify(items));
      },
      clear: function () {
        this.items = [];
        localStorage.removeItem(this.name);
        return true;
      }
    },
    togleNightMode: function () {
      let night_mode = DB.get("settings", "night_mode");
      let night_mode_timetable = DB.get("settings", "night_mode_timetable");

      if (night_mode) {
        $$("html").addClass("theme-dark");
      } else if (!night_mode && night_mode_timetable) {
        let night_mode_timetable_start = DB.get(
            "settings",
            "night_mode_timetable_start"
        );
        let night_mode_timetable_end = DB.get(
            "settings",
            "night_mode_timetable_end"
        );
        let now = new Date().getHours() + ":" + new Date().getMinutes();
        if (
            now >= night_mode_timetable_start &&
            night_mode_timetable_end <= now
        ) {
          $$("html").addClass("theme-dark");
          $$("body").addClass("theme-dark");
        }
      } else {
        $$("html").removeClass("theme-dark");
        $$("body").removeClass("theme-dark");
      }
    },
    togleColorScheme: function (color) {
      let currentColor = DB.get("settings", "color_scheme");
      DB.set("settings", "color_scheme", color);
      app.data.SELECTORS.forEach(function (item) {
        $$(item).removeClass('color-theme-' + currentColor);
        $$(item).addClass("color-theme-" + color);
      });
    }
  },
  routes: routes,
  on: {
    init: function () {
      // font size
      this.methods.applyFontSize(parseInt(DB.get("settings", "font_size")));
      app.methods.logger.set("App: Initialized");
      // nigth mode
      app.methods.togleNightMode();
      // color scheme
      app.methods.togleColorScheme(DB.get("settings", "color_scheme"));
    },
    pageInit: function () {
      // fix navbar (MD-theme) at migration f7 v4 -> v5
      if ($$('.navbar-bg').length < 5) {
        $$(".navbar").prepend('<div class="navbar-bg"></div>');
      }
      // nigth mode check
      app.methods.togleNightMode();
      app.methods.logger.set(
          "Page: Loaded",
          app.methods.currentUrl(),
          app.methods.currentPath()
      );
      // Init Highlighting
      if ($(".sh_gcode").length) {
        sh_highlightDocument();
      }
      // Load and aplly default font size
      this.methods.applyFontSize(parseInt(DB.get("settings", "font_size")));
    }
  }
});

// Init main view
const mainView = app.views.create(".view-main", {
  iosSwipeBack: DB.get("settings", "swipe_to_back"),
  iosSwipeBackActiveArea: app.width / 3,
  iosSwipeBackAnimateOpacity: true,
  mdSwipeBack: DB.get("settings", "swipe_to_back"),
  mdSwipeBackActiveArea: app.width / 3,
  mdSwipeBackAnimateOpacity: true,
  auroraSwipeBack: DB.get("settings", "swipe_to_back"),
  auroraSwipeBackActiveArea: app.width / 3,
  auroraSwipeBackAnimateOpacity: true,
  url: "/",
  pushState: true,
  history: true
});
