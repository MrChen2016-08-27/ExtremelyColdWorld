class Level1 extends egret.DisplayObjectContainer implements Level{
    /* 设置请求 */
    private request:egret.HttpRequest;
    /* 设置资源加载路径  */
    private url: string;
    /* TMXTilemap实例对象 */
    private tmxTileMap: tiled.TMXTilemap;
    constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    public onAddToStage(): void{
        // 初始化资源加载路径
        this.url = "./resource/cute.tmx";
        // 初始化请求
        this.request = new egret.HttpRequest();
        // 监听资源加载完成事件
        this.request.once(egret.Event.COMPLETE, this.onMapComplete, this);
        // 发送请求
        this.request.open(this.url, egret.HttpMethod.GET);
        this.request.send();
    }

    public onMapComplete(event:egret.Event) {
        // 获取地图数据
        const data:any = egret.XML.parse(event.currentTarget.response);
        // 初始化地图
        this.tmxTileMap = new tiled.TMXTilemap(1010, 3249, data, this.url);
        // 显示位置从底部开始
        this.tmxTileMap.y = -(this.tmxTileMap.height - this.stage.stageHeight);
        // 渲染
        this.tmxTileMap.render();
        this.addChild(this.tmxTileMap);
        const group: tiled.TMXObjectGroup = this.getGroupByName('roles');
        console.log(group.getObjectById(4));
        setTimeout(() => {
            console.log(group.getObjectById(4));
        }, 500);
    }
    public getGroupByName(name): tiled.TMXObjectGroup{
        const groups: Array<tiled.TMXObjectGroup> = this.tmxTileMap.getObjects();
        let group: tiled.TMXObjectGroup;
        groups.some((group2) => {
            if (group2.name === name) {
                group = group2;
                return true;
            }
        });
        return group;
    }
    public end(): void{
        this.url = null;
        this.request = null;
        this.tmxTileMap.destory();
        this.removeChildren();
    }
}