var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var ApplicationMediator = (function (_super) {
    __extends(ApplicationMediator, _super);
    function ApplicationMediator(app) {
        var _this = _super.call(this, ApplicationMediator.NAME, app) || this;
        _this.level1 = new Level1();
        // this.facade().sendNotification(ConstNotices.GET_GANE_CONFIG);
        _this.rootView = app;
        return _this;
        // this.rootView.addEventListener(App.CREATE_COMPLETE, () => {
        //     this.sendNotification(ConstNotices.GET_GANE_CONFIG);
        // }, this);
    }
    /**
     * @override
     */
    ApplicationMediator.prototype.onRegister = function () {
        var _this = this;
        this.rootView.addEventListener(App.CREATE_COMPLETE, function () {
            console.log('send..');
            _this.sendNotification(ConstNotices.GET_GANE_CONFIG);
        }, this);
        this.initViewsMediator();
    };
    /**
     * @override
     */
    ApplicationMediator.prototype.listNotificationInterests = function () {
        return [
            ConstNotices.GAME_CONFIG_COMPLETE
        ];
    };
    /**
     * @override
     */
    ApplicationMediator.prototype.handleNotification = function (note) {
        switch (note.getName()) {
            case ConstNotices.GAME_CONFIG_COMPLETE:
                ViewsManager.getInstance().push(this.loginView);
                break;
            default:
                break;
        }
    };
    ApplicationMediator.prototype.initViewsMediator = function () {
        var login = new Login();
        this.facade().registerMediator(new LoginMediator(login));
        this.loginView = login;
        var leve1 = new Level1();
        this.facade().registerMediator(new LevelMediator(leve1));
    };
    ApplicationMediator.NAME = 'ApplicationMediator';
    return ApplicationMediator;
}(puremvc.Mediator));
__reflect(ApplicationMediator.prototype, "ApplicationMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
//# sourceMappingURL=ApplicationMediator.js.map