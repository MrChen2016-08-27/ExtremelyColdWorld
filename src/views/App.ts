class App extends egret.DisplayObjectContainer{
    public static readonly CREATE_COMPLETE: string = 'create_complete';
    constructor() {
        super();
        ApplicationFacade.getInstance().startup(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage() {
        this.createGameScene();
    }

    protected createGameScene(): void {
        let button = new eui.Button();
        button.label = "start!";
        button.horizontalCenter = 0;
        button.verticalCenter = 0;
        this.addChild(button);
        const event = new egret.Event(App.CREATE_COMPLETE);
        this.dispatchEvent(event);
    }

    public end():void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.removeChildren();
    }
}