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
var BootViews = (function (_super) {
    __extends(BootViews, _super);
    function BootViews() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @override
     */
    BootViews.prototype.execute = function (notice) {
        // 注册主舞台
        var app = notice.getBody();
        this.facade().registerMediator(new ApplicationMediator(app));
    };
    return BootViews;
}(puremvc.SimpleCommand));
__reflect(BootViews.prototype, "BootViews");
//# sourceMappingURL=BootViews.js.map