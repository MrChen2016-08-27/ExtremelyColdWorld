class ApplicationFacade extends puremvc.Facade implements puremvc.IFacade{
    public static readonly NAME: string = 'ApplicationFacade';
    public static readonly STARTUP: string = 'startup';
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
        this.registerCommand(ApplicationFacade.STARTUP, StartCommand);
    }

    public startup(app: App): void{
        this.sendNotification(ApplicationFacade.STARTUP, app);
    }
}