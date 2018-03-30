class ApplicationFacade extends puremvc.Facade implements puremvc.IFacade{
    public static readonly NAME: string = 'ApplicationFacade';
    private static  instance;
    private constructor() {
        super(ApplicationFacade.NAME);
    }

    public static getInstance(): ApplicationFacade {
        if (!this.instance) {
            this.instance = new ApplicationFacade();
        }
        return this.instance;
    }

    /**
     * @override
     */
    public initializeController() :void{
        super.initializeController();
        this.registerCommand(ConstNotices.STARTUP, StartCommand);
    }

    public startup(app: App): void{
        this.sendNotification(ConstNotices.STARTUP, app);
    }
}