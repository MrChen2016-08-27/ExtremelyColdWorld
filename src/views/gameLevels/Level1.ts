class Level1 extends egret.DisplayObjectContainer implements Level{
    /* 设置请求 */
    private request:egret.HttpRequest;
    /* 设置资源加载路径  */
    private url: string = "./resource/cute.tmx";
    /* TMXTilemap实例对象 */
    private tmxTileMap: tiled.TMXTilemap;
    /* 主角 */
    private primaryRole: tiled.TMXObject;
    constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    public async onAddToStage() {
        const res = await this.loadMap();
        await this.renderMap(res);
        const group: tiled.TMXObjectGroup = this.getGroupByName('roles');
        this.primaryRole = group.getObjectById(4);
    }
    public loadMap() {
        // 初始化请求
        this.request = new egret.HttpRequest();
        return new Promise((resolve) => {
            // 监听资源加载完成事件
            this.request.once(egret.Event.COMPLETE, (event:egret.Event) => {
                resolve(event.currentTarget.response);
            }, this);
            // 发送请求
            this.request.open(this.url, egret.HttpMethod.GET);
            this.request.send();
        });
    }
    public async renderMap(response) {
        // 获取地图数据
        const data:any = egret.XML.parse(response);
        // 初始化地图
        this.tmxTileMap = new tiled.TMXTilemap(1010, 3249, data, this.url);
        // 显示位置从底部开始
        this.tmxTileMap.y = -(this.tmxTileMap.height - this.stage.stageHeight);
        return new Promise((resolve) => {
            this.tmxTileMap.addEventListener(tiled.TMXImageLoadEvent.ALL_IMAGE_COMPLETE, () => {
                resolve();
            }, this);
            // 渲染
            this.tmxTileMap.render();
            this.addChild(this.tmxTileMap);
        });
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