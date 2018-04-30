class ViewsManager extends egret.DisplayObjectContainer{
    private static instance:ViewsManager;
    constructor() {
        super();
    }

    public static getInstance():ViewsManager {
        if (ViewsManager.instance == null) {
            ViewsManager.instance = new ViewsManager();
        }
        return ViewsManager.instance;
    }

}