class Login extends eui.UILayer implements View{
    private userNameInput:eui.TextInput;
    private pwdInput:eui.TextInput;
    private submitBtn:eui.Button;
    public static readonly LOGIN_USER:string = 'login_user';
    constructor() {
        super();
        this.createView();
    }

    public createView():void {
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
        this.submitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submitLogin, this);

        this.addChild(this.userNameInput);
        this.addChild(this.pwdInput);
        this.addChild(this.submitBtn);
    }
    public submitLogin() {
        const form = {
            userName: this.userNameInput.text,
            password: this.pwdInput.text
        };
        this.dispatchEventWith(Login.LOGIN_USER, false, form);
    }
    public end():void {
        this.userNameInput = null;
        this.pwdInput = null;
        this.submitBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.submitLogin, this);
        this.submitBtn = null;
    }
}