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
        const joystick = this.addVirtualJoystick();
        joystick.addEventListener(VirtualJoystick.ActionMove, this.action_move, this);
    }

    public action_move(event) {
        const angle = event.data;
        this.speedX = Math.cos(angle) * this.speed;
        this.speedY = Math.sin(angle) * this.speed;
        console.log('action_move...' + event.data);
    }
}