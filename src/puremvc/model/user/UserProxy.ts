class UserProxy extends puremvc.Proxy implements puremvc.IProxy{
    public static readonly NAME: string = 'UserProxy';
    constructor() {
        super(UserProxy.NAME, new UserModel());
    }
    getlocalUserConfig(): void {
        const localInfo = {
            userName: 'code',
            time: '2018-3-30 17:46'
        };
        this.facade().sendNotification(ConstNotices.GAME_CONFIG_COMPLETE, localInfo);
    }
}