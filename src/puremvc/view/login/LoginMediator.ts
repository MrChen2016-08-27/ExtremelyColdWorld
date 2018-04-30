class LoginMediator extends puremvc.Mediator implements puremvc.IMediator{
    public static readonly NAME:string = 'loginMediator';
    private loginView:Login;
    constructor(loginView:Login) {
        super();
        console.log('loginMediator');
        this.loginView = loginView;
    }

    /**
     * @override
     */
    public onRegister():void {
        this.loginView.addEventListener(Login.LOGIN_USER, (event:egret.Event) => {
            this.sendNotification(ConstNotices.LOGIN, event.data);
        }, this);
    }
    /**
     * @override
     */
    public listNotificationInterests(): Array<any>{
        return [
            ConstNotices.LOGIN_RESULT
        ];
    }
    /**
     * @override
     */
    public handleNotification(note:puremvc.INotification):void {
        const result = note.getBody();
        switch (note.getName()) {
            case ConstNotices.LOGIN_RESULT:
                this.handleLoginResult(result);
                break;
            default:
                break;
        }
    }

    private handleLoginResult(result):void {
        console.log(result, '...');
    }
}