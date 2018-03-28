class ApplicationMediator extends puremvc.Mediator implements puremvc.IMediator{
    public static readonly NAME: string  = 'ApplicationMediator';
    private rootView: App;
    constructor(app: App) {
        super(ApplicationMediator.NAME);
        this.rootView = app;
    }
}