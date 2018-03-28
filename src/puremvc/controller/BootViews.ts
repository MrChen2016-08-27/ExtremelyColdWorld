class BootViews extends puremvc.SimpleCommand{
    /**
     * @override
     */
    public execute(notice: puremvc.INotification): void{
        // 注册主舞台
        const app: App = <App>notice.getBody();
        this.facade().registerMediator(new ApplicationMediator(app));
    }
}