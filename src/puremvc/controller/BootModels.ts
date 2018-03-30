class BootModels extends puremvc.SimpleCommand{
    /**
     * @override
     */
    public execute(): void {
        this.facade().registerProxy(new UserProxy());
    }
}