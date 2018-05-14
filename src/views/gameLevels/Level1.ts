class Level1 extends LevelParent implements Level{
    constructor() {
        super();
        this.url = "./resource/cute.tmx";
        this.primaryRoleId = 4;
    }

    /**
     * @override
     */
    public async onAddToStage() {
        await super.onAddToStage();
        this.addVirtualJoystick();
    }
}