class AppCommand extends puremvc.SimpleCommand{
    /**
     * @override
     */
    public execute() {
        const userProxy = <UserProxy>this.facade().retrieveProxy(UserProxy.NAME);
        userProxy.getlocalUserConfig();
    }
}