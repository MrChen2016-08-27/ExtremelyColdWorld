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
var ApplicationMediator = (function (_super) {
    __extends(ApplicationMediator, _super);
    function ApplicationMediator(app) {
        var _this = _super.call(this, ApplicationMediator.NAME) || this;
        _this.rootView = app;
        return _this;
    }
    ApplicationMediator.NAME = 'ApplicationMediator';
    return ApplicationMediator;
}(puremvc.Mediator));
__reflect(ApplicationMediator.prototype, "ApplicationMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
//# sourceMappingURL=ApplicationMediator.js.map