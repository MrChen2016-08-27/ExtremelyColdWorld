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
        return _this;
    }
    App.prototype.createGameScene = function () {
        var button = new eui.Button();
        button.label = "Click!";
        button.horizontalCenter = 0;
        button.verticalCenter = 0;
        this.addChild(button);
        var event = new egret.Event(App.CREATE_COMPLETE);
        this.dispatchEvent(event);
    };
    App.CREATE_COMPLETE = 'create_complete';
    return App;
}(egret.DisplayObjectContainer));
__reflect(App.prototype, "App");
//# sourceMappingURL=App.js.map