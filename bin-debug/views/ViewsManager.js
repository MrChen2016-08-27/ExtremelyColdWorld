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
var ViewsManager = (function (_super) {
    __extends(ViewsManager, _super);
    function ViewsManager() {
        return _super.call(this) || this;
    }
    ViewsManager.getInstance = function () {
        if (ViewsManager.instance == null) {
            ViewsManager.instance = new ViewsManager();
        }
        return ViewsManager.instance;
    };
    return ViewsManager;
}(egret.DisplayObjectContainer));
__reflect(ViewsManager.prototype, "ViewsManager");
//# sourceMappingURL=ViewsManager.js.map