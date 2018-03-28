class App extends egret.DisplayObjectContainer{
    constructor() {
        super();
        ApplicationFacade.getInstance().startup(this);
    }
}