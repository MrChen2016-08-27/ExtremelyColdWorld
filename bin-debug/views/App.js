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
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this) || this;
        ApplicationFacade.getInstance().startup(_this);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    App.prototype.onAddToStage = function () {
        this.addChild(ViewsManager.getInstance());
        var event = new egret.Event(App.CREATE_COMPLETE);
        this.dispatchEvent(event);
    };
    App.prototype.end = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    };
    App.CREATE_COMPLETE = 'create_complete';
    return App;
}(egret.DisplayObjectContainer));
__reflect(App.prototype, "App");
//# sourceMappingURL=App.js.map