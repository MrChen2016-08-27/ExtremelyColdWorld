class App extends egret.DisplayObjectContainer{
    public static readonly CREATE_COMPLETE: string = 'create_complete';
    constructor() {
        super();
        ApplicationFacade.getInstance().startup(this);
    }
    protected createGameScene(): void {
        let button = new eui.Button();
        button.label = "Click!";
        button.horizontalCenter = 0;
        button.verticalCenter = 0;
        this.addChild(button);
        const event = new egret.Event(App.CREATE_COMPLETE);
        this.dispatchEvent(event);
    }
}