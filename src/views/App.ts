class App extends egret.DisplayObjectContainer{
    public static readonly CREATE_COMPLETE: string = 'create_complete';
    constructor() {
        super();
        ApplicationFacade.getInstance().startup(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage() {
       this.addChild(ViewsManager.getInstance());
       const event = new egret.Event(App.CREATE_COMPLETE);
       this.dispatchEvent(event);
    }

    public end():void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
}