function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function getDeviceInfo() {
    for (let opt in device) {
        DB.set('device', opt, device[opt]);
    }
}
window.onerror = function(msg, url, lineNo, columnNo, error) {
    app.sheet.create({
        content: `<div class="sheet-modal">
                                    <div class="toolbar">
                                        <div class="toolbar-inner">
                                           <div class="left" style="margin-left: 15px;"><i class="f7-icons" style="font-size: 16px">exclamationmark_triangle</i> Error</div>
                                            <div class="right">
                                                <a class="link sheet-close">Close</a>
                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div class="sheet-modal-inner">
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
                                </div>`,
        swipeToClose: false,
        swipeToStep: false,
        backdrop: true,
    }).open();
};

function onBackKeyDown() {
    app.methods.logger.set('Device: Tap to Backbutton');
    console.log('Device: Tap to Backbutton');

    let leftp = app.panel.left && app.panel.left.opened;
    let rightp = app.panel.right && app.panel.right.opened;

    if (leftp || rightp) {
        app.panel.close();
        app.methods.logger.set('Panel: Right or Left panel Closed');
    } else if ($$('.modal-in').length > 0) {
        app.dialog.close();
        app.methods.logger.set('Dialog :: Closed');
    } else if ($$('.photo-browser').length > 0) {
        app.popup.close();
        app.methods.logger.set('Popup :: Closed');
    } else if ($$('.card').length > 0) {
        app.card.close();
        app.methods.logger.set('Card :: Closed');
    } else if (app.methods.currentPath() == 'index.html') {
        app.methods.logger.set('Application :: Closed');
        app.methods.closeApp();
    } else {
        mainView.router.back();
    }
    mainView.router.back();
    app.methods.logger.set('Router :: To Back');
}

function onPause() {
    // Handle the pause event
}

function onResume() {
    // Handle the resume event
}

function menubutton() {
    console.log('Device: Tap to MenuButton');
    app.views.main.router.navigate('/settings/', {
        reloadCurrent: true,
        clearPreviousHistory: true,
        animate: true,
        pushState: false
    });
}

function onDeviceReady() {
    console.log('Device ready: cordova-' + cordova.platformId + '@' + cordova.version);
    getDeviceInfo();
    document.addEventListener("backbutton", onBackKeyDown, false);
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
    document.addEventListener("menubutton", menubutton, false);
}