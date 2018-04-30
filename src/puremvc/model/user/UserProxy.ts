class UserProxy extends puremvc.Proxy implements puremvc.IProxy{
    public static readonly NAME: string = 'UserProxy';
    constructor() {
        super(UserProxy.NAME, new UserModel());
    }
    public getlocalUserConfig(): void {
        const localInfo = {
            userName: 'code',
            time: '2018-3-30 17:46'
        };
        this.facade().sendNotification(ConstNotices.GAME_CONFIG_COMPLETE, localInfo);
    }

    public login(userName:string, password:string):void {
        const user = {
            userName: 'admin',
            password: 'admin'
        };
        const result = userName === user.userName && password === user.password;
        this.facade().sendNotification(ConstNotices.LOGIN_RESULT, result);
    }
}