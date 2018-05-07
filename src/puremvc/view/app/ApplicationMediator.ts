class ApplicationMediator extends puremvc.Mediator implements puremvc.IMediator{
    public static readonly NAME: string  = 'ApplicationMediator';
    private rootView: App;
    private loginView: Login;
    private level1 = new Level1();
    constructor(app: App) {
        super(ApplicationMediator.NAME, app);
        // this.facade().sendNotification(ConstNotices.GET_GANE_CONFIG);
        this.rootView = app;
        // this.rootView.addEventListener(App.CREATE_COMPLETE, () => {
        //     this.sendNotification(ConstNotices.GET_GANE_CONFIG);
        // }, this);
    }
    /**
     * @override
     */
    public onRegister():void {
        this.rootView.addEventListener(App.CREATE_COMPLETE, () => {
            console.log('send..');
            this.sendNotification(ConstNotices.GET_GANE_CONFIG);
        }, this);
        this.initViewsMediator();
    }
    /**
     * @override
     */
    public listNotificationInterests(): Array<string> {
        return [
            ConstNotices.GAME_CONFIG_COMPLETE
        ];
    }

    /**
     * @override
     */
    public handleNotification(note: puremvc.INotification): void {
        switch (note.getName()) {
            case ConstNotices.GAME_CONFIG_COMPLETE:
                ViewsManager.getInstance().push(this.loginView);
                break;
            default:
                break;
        }
    }
    public initViewsMediator() {
        const login = new Login();
        this.facade().registerMediator(new LoginMediator(login));
        this.loginView = login;

        const leve1 = new Level1();
        this.facade().registerMediator(new LevelMediator(leve1));

    }
}