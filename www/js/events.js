function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function getDeviceInfo() {
    for (let opt in device) {
        DB.set("device", opt, device[opt]);
    }
}

window.onerror = function (msg, url, lineNo, columnNo, error) {
    app.sheet
        .create({
            content: `<div class="sheet-modal error-sheet-modal">
      <div class="toolbar">
        <div class="toolbar-inner">
          <div class="left" style="margin-left: 15px;">
            <i class="f7-icons" style="font-size: 18px;color:red;">exclamationmark_triangle</i>
            Внутрення ошибка
          </div>
          <div class="right">
            <a class="link sheet-close">Закрыть</a>
          </div>
        </div>
      </div>
      <div class="sheet-modal-inner">
        <div class="page-content">
          <div class="block">
            <div class="card card-outline">
              <div class="card-header"><b>Name</b></div>
              <div class="card-content card-content-padding"><i>${msg}</i></div>
            </div>
            <div class="card card-outline">
              <div class="card-header"><b>URL</b></div>
              <div class="card-content card-content-padding"><i>${url}</i></div>
            </div>
            <div class="card card-outline">
              <div class="card-header"><b>Line</b></div>
              <div class="card-content card-content-padding"><i>${lineNo}</i></div>
            </div>
            <div class="card card-outline">
              <div class="card-header"><b>Description</b></div>
              <div class="card-content card-content-padding"><i>${error}</i></div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
            swipeToClose: true,
            swipeToStep: false,
            backdrop: true
        })
        .open();
};

function onDeviceReady() {
    console.log(
        "Device ready: cordova-" + cordova.platformId + "@" + cordova.version
    );

    document.addEventListener(
        "backbutton",
        function (e) {
            if ($(".actions-modal.modal-in").length) {
                app.actions.close(".actions-modal.modal-in");
                e.preventDefault();
                return false;
            }
            if ($(".card-opened").length) {
                app.card.close(".card-opened");
                e.preventDefault();
                return false;
            }
            if ($(".dialog.modal-in").length) {
                app.dialog.close(".dialog.modal-in");
                e.preventDefault();
                return false;
            }
            if ($(".sheet-modal.modal-in").length) {
                app.sheet.close(".sheet-modal.modal-in");
                e.preventDefault();
                return false;
            }
            if ($(".popover.modal-in").length) {
                app.popover.close(".popover.modal-in");
                e.preventDefault();
                return false;
            }
            if ($(".login-screen.modal-in").length) {
                app.loginScreen.close(".login-screen.modal-in");
                e.preventDefault();
                return false;
            }
            if ($(".popup.modal-in").length) {
                app.popup.close(".popup.modal-in");
                e.preventDefault();
                return false;
            }
            if (
                app.views.current &&
                app.views.current.router &&
                app.views.current.router.history.length > 1
            ) {
                app.views.current.router.back();
                e.preventDefault();
                return false;
            } else if (app.views.current.router.history.length == 1) {
                e.preventDefault();
                app.methods.closeApp();
            }
        },
        false
    );
    // Write in DB informations about this device
    getDeviceInfo();
}
