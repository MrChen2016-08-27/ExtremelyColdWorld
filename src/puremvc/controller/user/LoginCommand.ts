class LoginCommand extends puremvc.SimpleCommand{
    /**
     * @override
     */
    public execute(note:puremvc.INotification):void {
        const user = note.getBody();
        const userProxy = <UserProxy>this.facade().retrieveProxy(UserProxy.NAME);
        userProxy.login(user.userName, user.password);
    }
}