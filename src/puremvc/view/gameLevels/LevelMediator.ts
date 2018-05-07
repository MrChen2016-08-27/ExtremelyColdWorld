class LevelMediator extends puremvc.Mediator implements puremvc.Mediator{
    public static readonly NAME: string  = 'LevelMediator';
    private view:Level;
    constructor(level: Level) {
        super(LevelMediator.NAME, level);
        this.view = level;
    }

    /**
     * @override
     */
    public listNotificationInterests(): Array<string> {
        return [
            ConstNotices.LOGIN_RESULT
        ];
    }

    /**
     * @override
     */
    public handleNotification(note: puremvc.INotification): void {
        switch (note.getName()) {
            case ConstNotices.LOGIN_RESULT:
                ViewsManager.getInstance().push(this.view);
                break;
            default:
                break;
        }
    }
} 