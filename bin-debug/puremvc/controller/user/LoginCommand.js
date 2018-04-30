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
var LoginCommand = (function (_super) {
    __extends(LoginCommand, _super);
    function LoginCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @override
     */
    LoginCommand.prototype.execute = function (note) {
        var user = note.getBody();
        var userProxy = this.facade().retrieveProxy(UserProxy.NAME);
        userProxy.login(user.userName, user.password);
    };
    return LoginCommand;
}(puremvc.SimpleCommand));
__reflect(LoginCommand.prototype, "LoginCommand");
//# sourceMappingURL=LoginCommand.js.map