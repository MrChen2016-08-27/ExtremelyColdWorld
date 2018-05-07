class LoginMediator extends puremvc.Mediator implements puremvc.IMediator{
    public static readonly NAME:string = 'loginMediator';
    private loginView:Login;
    private viewManager = ViewsManager.getInstance();
    constructor(loginView:Login) {
        super();
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
        ];
    }
    /**
     * @override
     */
    public handleNotification(note:puremvc.INotification):void {
        const result = note.getBody();
        switch (note.getName()) {
            default:
                break;
        }
    }

    private handleLoginResult(result):void {
    }
}