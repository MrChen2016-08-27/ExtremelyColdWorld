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
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    Login.prototype.createView = function () {
        var _this = this;
        this.userNameInput = new eui.TextInput();
        this.userNameInput.prompt = '用户名';
        this.userNameInput.verticalCenter = -50;
        this.userNameInput.horizontalCenter = 0;
        this.pwdInput = new eui.TextInput();
        this.pwdInput.prompt = '密码';
        this.pwdInput.verticalCenter = 0;
        this.pwdInput.horizontalCenter = 0;
        this.submitBtn = new eui.Button();
        this.submitBtn.label = '登录';
        this.submitBtn.verticalCenter = 50;
        this.submitBtn.horizontalCenter = 0;
        this.submitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var form = {
                userName: _this.userNameInput.text,
                password: _this.pwdInput.text
            };
            // const event = new egret.Event(Login.LOGIN_USER);
            _this.dispatchEventWith(Login.LOGIN_USER, false, form);
            console.log('TAP');
        }, this);
        this.addChild(this.userNameInput);
        this.addChild(this.pwdInput);
        this.addChild(this.submitBtn);
    };
    Login.LOGIN_USER = 'login_user';
    return Login;
}(eui.UILayer));
__reflect(Login.prototype, "Login");
//# sourceMappingURL=Login.js.map