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
var ApplicationFacade = (function (_super) {
    __extends(ApplicationFacade, _super);
    function ApplicationFacade() {
        return _super.call(this, ApplicationFacade.NAME) || this;
    }
    ApplicationFacade.getInstance = function () {
        if (!this.instance) {
            this.instance = new ApplicationFacade();
        }
        return this.instance;
    };
    /**
     * @override
     */
    ApplicationFacade.prototype.initializeController = function () {
        _super.prototype.initializeController.call(this);
        this.registerCommand(ConstNotices.STARTUP, StartCommand);
    };
    ApplicationFacade.prototype.startup = function (app) {
        this.sendNotification(ConstNotices.STARTUP, app);
    };
    ApplicationFacade.NAME = 'ApplicationFacade';
    return ApplicationFacade;
}(puremvc.Facade));
__reflect(ApplicationFacade.prototype, "ApplicationFacade", ["puremvc.IFacade", "puremvc.INotifier"]);
//# sourceMappingURL=ApplicationFacade.js.map