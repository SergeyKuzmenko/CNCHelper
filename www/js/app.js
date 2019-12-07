moment.locale('ru');
const $$ = Dom7;
const app = new Framework7({
    root: '#app',
    id: 'com.kuzmenko.cnchelper',
    name: DB.get('settings', 'name'),
    theme: DB.get('settings', 'theme'),
    version: DB.get('settings', 'version'),
    card: {
        swipeToClose: false
    },
    data: {
        'SELECTORS': [
            '.page', '.page-content', '.block', '.block-title', '.view',
            '.title', '.list', '.item-title', '.link', '.button',
            '.card-content', '.sh_gcode'
        ]
    },
    methods: {
        to: function(url) {
            this.views.main.router.navigate(url, {
                reloadCurrent: true
            });
        },
        reloadApp: function () {
            navigator.splashscreen.show();
            setTimeout(function () {
                location.reload();
            }, 1000, function() {
                navigator.splashscreen.hide();
            });
        },
        selectTheme: function(theme) {
            DB.set('settings', 'theme', theme);
            app.toast.create({
                text: 'Для применения изменений необходимо перезагрузить приложение',
                closeButton: true,
                closeButtonText: 'Перезагрузить',
                closeButtonColor: 'red',
                closeTimeout: 5000,
                on: {
                    close: function() {
                        app.methods.reloadApp();
                    },
                }
            }).open();
        },
        openPhoto: function(urlToPhoto, captionText) {
            let photoViewer = app.photoBrowser.create({
                photos: [{
                    url: urlToPhoto,
                    caption: captionText
                }],
                theme: 'dark',
                toolbar: false,
                popupCloseLinkText: 'Закрыть',
                navbarOfText: '',
                url: 'photo/'
            });
            photoViewer.open();
            // Hide some elements
            $$('.toolbar-bottom-md').hide();
            $$('.photo-browser-current').hide();
            $$('.photo-browser-of').hide();
            $$('.photo-browser-total').hide();
        },
        calc: {
            turning: function() {
                let formData = app.form.convertToData('#calc_turning');
                let Diametr = Number.parseFloat(formData.Diametr);
                let Speed = Number.parseFloat(formData.Speed);
                let Feed = Number.parseFloat(formData.Feed);
                let NumberPI = Math.PI;

                if (!Diametr || !Speed || !Feed) {
                    app.dialog.alert('Введеные данные не валидны! Исправьте и повторите ещё раз.', 'Ошибка');
                } else {
                    let SpindleSpeed = Math.round((Speed * 1000) / (NumberPI * Diametr));
                    let MinuteFeed = Math.round(((Speed * 1000) / (NumberPI * Diametr)) * Feed);

                    let resultText = '<div class="list"> <ul> <li> <div class="item-content"> <div class="item-inner"> <div class="item-title">Диаметр заготовки (мм)</div> <div class="item-after"><span class="badge">' + Diametr + '</span></div> </div> </div> </li> <li> <div class="item-content"> <div class="item-inner"> <div class="item-title">Скорость резания (м/мин)</div> <div class="item-after"><span class="badge">' + Speed + '</span></div> </div> </div> </li> <li> <div class="item-content"> <div class="item-inner"> <div class="item-title">Подача на оборот (мм)</div> <div class="item-after"><span class="badge">' + Feed + '</span></div> </div> </div> </li> <li> <div class="item-content"> <div class="item-inner"> <div class="item-title">Частота вращения шпинделя (об/мин)</div> <div class="item-after"><span class="badge color-green">' + SpindleSpeed + '</span></div> </div> </div> </li> <li> <div class="item-content"> <div class="item-inner"> <div class="item-title">Минутная подача (мм/мин)</div> <div class="item-after"><span class="badge color-green">' + MinuteFeed + '</span></div> </div> </div> </li> </ul></div>';
                    $$('.TurningResult').html(resultText);
                }
            },
            milling: function() {
                let formData = app.form.convertToData('#calc_milling');
                let Diametr = Number.parseFloat(formData.Diametr);
                let Speed = Number.parseFloat(formData.Speed);
                let FeedToPer = Number.parseFloat(formData.FeedToPer);
                let NumberPers = Number.parseFloat(formData.NumberPers);
                let NumberPI = Math.PI;

                if (!Diametr || !Speed || !FeedToPer || !NumberPers) {
                    app.dialog.alert('Введеные данные не валидны! Исправьте и повторите ещё раз.', 'Ошибка');
                } else {
                    let SpindleSpeed = Math.round((Speed * 1000) / (NumberPI * Diametr));
                    let MinuteFeed = Math.round(((Speed * 1000) / (NumberPI * Diametr)) * NumberPers * FeedToPer);

                    let resultText = '<div class="list"> <ul> <li> <div class="item-content"> <div class="item-inner"> <div class="item-title">Диаметр фрезы (мм)</div> <div class="item-after"><span class="badge">' + Diametr + '</span></div> </div> </div> </li> <li> <div class="item-content"> <div class="item-inner"> <div class="item-title">Скорость резания (м/мин)</div> <div class="item-after"><span class="badge">' + Speed + '</span></div> </div> </div> </li> <li> <div class="item-content"> <div class="item-inner"> <div class="item-title">Подача на зуб (мм)</div> <div class="item-after"><span class="badge">' + FeedToPer + '</span></div> </div> </div> </li><li> <div class="item-content"> <div class="item-inner"> <div class="item-title">Количество зубьев (шт)</div> <div class="item-after"><span class="badge">' + NumberPers + '</span></div> </div> </div> </li> <li> <div class="item-content"> <div class="item-inner"> <div class="item-title">Частота вращения шпинделя (об/мин)</div> <div class="item-after"><span class="badge color-green">' + SpindleSpeed + '</span></div> </div> </div> </li> <li> <div class="item-content"> <div class="item-inner"> <div class="item-title">Минутная подача (мм/мин)</div> <div class="item-after"><span class="badge color-green">' + MinuteFeed + '</span></div> </div> </div> </li> </ul></div>';
                    $$('.MillingResult').html(resultText);
                }
            },
            drilling: function() {
                let formData = app.form.convertToData('#calc_drilling');
                let Diametr = Number.parseFloat(formData.Diametr);
                let Speed = Number.parseFloat(formData.Speed);
                let Feed = Number.parseFloat(formData.Feed);
                let NumberPI = Math.PI;

                if (!Diametr || !Speed || !Feed) {
                    app.dialog.alert('Введеные данные не валидны! Исправьте и повторите ещё раз.', 'Ошибка');
                } else {
                    let SpindleSpeed = Math.round((Speed * 1000) / (NumberPI * Diametr));
                    let MinuteFeed = Math.round(((Speed * 1000) / (NumberPI * Diametr)) * Feed);

                    let resultText = '<div class="list"> <ul> <li> <div class="item-content"> <div class="item-inner"> <div class="item-title">Диаметр сверла (мм)</div> <div class="item-after"><span class="badge">' + Diametr + '</span></div> </div> </div> </li> <li> <div class="item-content"> <div class="item-inner"> <div class="item-title">Скорость резания (м/мин)</div> <div class="item-after"><span class="badge">' + Speed + '</span></div> </div> </div> </li> <li> <div class="item-content"> <div class="item-inner"> <div class="item-title">Подача на оборот (мм)</div> <div class="item-after"><span class="badge">' + Feed + '</span></div> </div> </div> </li> <li> <div class="item-content"> <div class="item-inner"> <div class="item-title">Частота вращения шпинделя (об/мин)</div> <div class="item-after"><span class="badge color-green">' + SpindleSpeed + '</span></div> </div> </div> </li> <li> <div class="item-content"> <div class="item-inner"> <div class="item-title">Минутная подача (мм/мин)</div> <div class="item-after"><span class="badge color-green">' + MinuteFeed + '</span></div> </div> </div> </li> </ul></div>';
                    $$('.DrillingResult').html(resultText);
                }
            }
        },
        fontSize: function(value) {
            let currentSize = parseInt(DB.get('settings', 'font_size'));
            let size;
            switch (value) {
                case 'minus':
                    size = currentSize - 1;
                    app.data.SELECTORS.forEach(function(item) {
                        $$(item).css('font-size', `${size}%`);
                    });
                    DB.set('settings', 'font_size', size);
                    break;
                case 'plus':
                    size = currentSize + 1;
                    app.data.SELECTORS.forEach(function(item) {
                        $$(item).css('font-size', `${size}%`);
                    });
                    DB.set('settings', 'font_size', size);
                    break;
            }
            app.toast.create({
                text: `Размер текста изменено на: ${size}`,
                closeTimeout: 2000
            }).open();
            app.methods.logger.set(`App: Selected font size = ${size}`, app.methods.currentUrl(), app.methods.currentPath());
        },
        applyFontSize: function(size) {
            app.data.SELECTORS.forEach(function(item) {
                $$(item).css('font-size', `${size}%`);
            });
        },
        closeApp: function() {
            app.dialog.create({
                title: 'Выйти с приложения?',
                buttons: [{
                    text: 'Отмена',
                    close: true
                }, {
                    text: 'Выход',
                    close: true,
                    bold: true,
                    onClick: function() {
                        window.navigator.app.exitApp();
                    }
                }]
            }).open();
        },
        currentPageName: function() {
            return this.views.main.router.currentPageEl.dataset.name;
        },
        currentUrl: function() {
            return app.views.main.router.url;
        },
        currentPath: function() {
            return app.views.main.router.currentRoute.route.url;
        },
        logger: {
            name: 'log',
            items: [],
            url: function() {
                return app.views.main.router.url;
            },
            get: function() {
                return JSON.parse(localStorage.getItem(this.name));
            },
            set: function(message, url = null, path = null, hardSet = false) {
                let template = {
                    uid: app.utils.id(),
                    date: moment().format('L'),
                    time: moment().format('LTS'),
                    path: path,
                    url: url,
                    message: message
                };
                // check: logger enabled or disabled
                if (DB.get('debug', 'logger') || hardSet) {
                    this.setLocalStorage(template);
                    this.items.push(template);
                    return template;
                }
            },
            getLocalStorage: function() {
                if (localStorage.getItem(this.name)) {
                    this.item = JSON.parse(localStorage.getItem(this.name));
                    return JSON.parse(localStorage.getItem(this.name));
                } else {
                    return [];
                }
            },
            setLocalStorage: function(obj) {
                let items = this.getLocalStorage();
                items.push(obj);
                localStorage.setItem(this.name, JSON.stringify(items));
            },
            clear: function() {
                this.items = [];
                localStorage.removeItem(this.name);
                return true;
            }
        },
        togleNightMode: function(state) {
            if (state) {
                $$('html').addClass('theme-dark');
            } else {
                $$('html').removeClass('theme-dark');
            }
        },
        togleColorScheme: function(color) {
            DB.set('settings', 'color_scheme', color);
            app.data.SELECTORS.forEach(function(item) {
                $$(item).addClass('color-theme-' + color);
            });
        }
    },
    routes: routes,
    on: {
        init: function() {
            // font size
            this.methods.applyFontSize(parseInt(DB.get('settings', 'font_size')));
            app.methods.logger.set('App: Initialized');

            // nigth mode
            app.methods.togleNightMode(DB.get('settings', 'night_mode'));

            // color scheme
            app.methods.togleColorScheme(DB.get('settings', 'color_scheme'));
        },
        pageInit: function() {
            // fix navbar at migration f7 v4 -> v5
            $$('.navbar').prepend('<div class="navbar-bg"></div>');

            app.methods.logger.set('Page: Loaded', app.methods.currentUrl(), app.methods.currentPath());

            // Init Highlighting
            if ($$('.sh_gcode').length > 0){
                sh_highlightDocument();
            }
            // Load and aplly default font size
            this.methods.applyFontSize(parseInt(DB.get('settings', 'font_size')));
        }
    }
});

// Init main view
const mainView = app.views.create('.view-main', {
    iosSwipeBack: DB.get('settings', 'swipe_to_back'),
    iosSwipeBackActiveArea: app.width / 3,
    iosSwipeBackAnimateOpacity: true,
    mdSwipeBack: DB.get('settings', 'swipe_to_back'),
    mdSwipeBackActiveArea: app.width / 3,
    mdSwipeBackAnimateOpacity: true,
    auroraSwipeBack: DB.get('settings', 'swipe_to_back'),
    auroraSwipeBackActiveArea: app.width / 3,
    auroraSwipeBackAnimateOpacity: true,
    url: '/',
    pushState: true,
    history: true
});