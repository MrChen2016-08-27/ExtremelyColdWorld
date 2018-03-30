class ApplicationMediator extends puremvc.Mediator implements puremvc.IMediator{
    public static readonly NAME: string  = 'ApplicationMediator';
    private rootView: App;
    constructor(app: App) {
        super(ApplicationMediator.NAME, app);
        this.facade().sendNotification(ConstNotices.GET_GANE_CONFIG);
        this.rootView = app;
        this.rootView.addEventListener(App.CREATE_COMPLETE, () => {
            this.sendNotification(ConstNotices.GET_GANE_CONFIG);
        }, this);
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
                console.log(note.getBody());
                break;
            default:
                break;
        }
    }
}