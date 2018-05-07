var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Level1 = (function (_super) {
    __extends(Level1, _super);
    function Level1() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Level1.prototype.onAddToStage = function () {
        // 初始化资源加载路径
        this.url = "./resource/cute.tmx";
        // 初始化请求
        this.request = new egret.HttpRequest();
        // 监听资源加载完成事件
        this.request.once(egret.Event.COMPLETE, this.onMapComplete, this);
        // 发送请求
        this.request.open(this.url, egret.HttpMethod.GET);
        this.request.send();
    };
    Level1.prototype.onMapComplete = function (event) {
        // 获取地图数据
        var data = egret.XML.parse(event.currentTarget.response);
        // 初始化地图
        this.tmxTileMap = new tiled.TMXTilemap(1010, 3249, data, this.url);
        // 显示位置从底部开始
        console.log(this.tmxTileMap.height, '@');
        console.log(this.stage.stageHeight, '?');
        this.tmxTileMap.y = -(this.tmxTileMap.height - this.stage.stageHeight);
        // 渲染
        this.tmxTileMap.render();
        this.addChild(this.tmxTileMap);
    };
    Level1.prototype.end = function () {
        this.url = null;
        this.request = null;
        this.tmxTileMap.destory();
        this.removeChildren();
    };
    return Level1;
}(egret.DisplayObjectContainer));
__reflect(Level1.prototype, "Level1", ["Level"]);
//# sourceMappingURL=Level1.js.map