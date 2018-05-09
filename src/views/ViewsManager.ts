/**
 * ViewsManager 作为一个代理视图容器
 * 所有视图的切换都会在这个容器上进行
 */
class ViewsManager extends egret.DisplayObjectContainer{
    private static instance:ViewsManager;
    private oldView:View;
    private newView:View;
    constructor() {
        super();
    }
    public static getInstance():ViewsManager {
        if (ViewsManager.instance == null) {
            ViewsManager.instance = new ViewsManager();
        }
        return ViewsManager.instance;
    }

    // 切换到一个新容器, 并清除旧容器与回收资源
    public push(view):void {
        this.oldView = this.newView;
        this.newView = view;
        if (this.oldView) {
            this.oldView.end();
        }
        this.removeChildren();
        this.addChild(view);
    }
}