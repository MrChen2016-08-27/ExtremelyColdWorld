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
var StartCommand = (function (_super) {
    __extends(StartCommand, _super);
    function StartCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @override
     */
    StartCommand.prototype.initializeMacroCommand = function () {
        this.addSubCommand(BootModels);
        this.addSubCommand(BootControllers);
        this.addSubCommand(BootViews);
    };
    StartCommand.MAME = 'StartCommand';
    return StartCommand;
}(puremvc.MacroCommand));
__reflect(StartCommand.prototype, "StartCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
//# sourceMappingURL=StartCommand.js.map