class BootControllers extends puremvc.SimpleCommand{
    /**
     * @override
     */
    public execute(notice: puremvc.INotification): void {
        this.facade().registerCommand(ConstNotices.GET_GANE_CONFIG, AppCommand);
    }
}