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
var LevelMediator = (function (_super) {
    __extends(LevelMediator, _super);
    function LevelMediator(level) {
        var _this = _super.call(this, LevelMediator.NAME, level) || this;
        _this.view = level;
        return _this;
    }
    /**
     * @override
     */
    LevelMediator.prototype.listNotificationInterests = function () {
        return [
            ConstNotices.LOGIN_RESULT
        ];
    };
    /**
     * @override
     */
    LevelMediator.prototype.handleNotification = function (note) {
        switch (note.getName()) {
            case ConstNotices.LOGIN_RESULT:
                ViewsManager.getInstance().push(this.view);
                break;
            default:
                break;
        }
    };
    LevelMediator.NAME = 'LevelMediator';
    return LevelMediator;
}(puremvc.Mediator));
__reflect(LevelMediator.prototype, "LevelMediator");
//# sourceMappingURL=LevelMediator.js.map