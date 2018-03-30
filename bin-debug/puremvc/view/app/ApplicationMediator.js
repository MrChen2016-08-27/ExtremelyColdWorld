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
        _this.facade().sendNotification(ConstNotices.GET_GANE_CONFIG);
        _this.rootView = app;
        _this.rootView.addEventListener(App.CREATE_COMPLETE, function () {
            _this.sendNotification(ConstNotices.GET_GANE_CONFIG);
        }, _this);
        return _this;
    }
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
                console.log(note.getBody());
                break;
            default:
                break;
        }
    };
    ApplicationMediator.NAME = 'ApplicationMediator';
    return ApplicationMediator;
}(puremvc.Mediator));
__reflect(ApplicationMediator.prototype, "ApplicationMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
//# sourceMappingURL=ApplicationMediator.js.map