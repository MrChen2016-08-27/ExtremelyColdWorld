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
var LoginMediator = (function (_super) {
    __extends(LoginMediator, _super);
    function LoginMediator(loginView) {
        var _this = _super.call(this) || this;
        console.log('loginMediator');
        _this.loginView = loginView;
        return _this;
    }
    /**
     * @override
     */
    LoginMediator.prototype.onRegister = function () {
        var _this = this;
        console.log('onRegister', this.loginView);
        this.loginView.addEventListener(Login.LOGIN_USER, function (event) {
            console.log(Login.LOGIN_USER, event.data);
            _this.sendNotification(ConstNotices.LOGIN, event.data);
        }, this);
    };
    /**
     * @override
     */
    LoginMediator.prototype.listNotificationInterests = function () {
        return [
            ConstNotices.LOGIN_RESULT
        ];
    };
    /**
     * @override
     */
    LoginMediator.prototype.handleNotification = function (note) {
        var result = note.getBody();
        switch (note.getName()) {
            case ConstNotices.LOGIN_RESULT:
                this.handleLoginResult(result);
                break;
            default:
                break;
        }
    };
    LoginMediator.prototype.handleLoginResult = function (result) {
        console.log(result, '...');
    };
    LoginMediator.NAME = 'loginMediator';
    return LoginMediator;
}(puremvc.Mediator));
__reflect(LoginMediator.prototype, "LoginMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
//# sourceMappingURL=LoginMediator.js.map