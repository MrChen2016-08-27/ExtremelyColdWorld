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
var UserProxy = (function (_super) {
    __extends(UserProxy, _super);
    function UserProxy() {
        return _super.call(this, UserProxy.NAME, new UserModel()) || this;
    }
    UserProxy.prototype.getlocalUserConfig = function () {
        var localInfo = {
            userName: 'code',
            time: '2018-3-30 17:46'
        };
        this.facade().sendNotification(ConstNotices.GAME_CONFIG_COMPLETE, localInfo);
    };
    UserProxy.NAME = 'UserProxy';
    return UserProxy;
}(puremvc.Proxy));
__reflect(UserProxy.prototype, "UserProxy", ["puremvc.IProxy", "puremvc.INotifier"]);
//# sourceMappingURL=UserProxy.js.map