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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var LevelParent = (function (_super) {
    __extends(LevelParent, _super);
    function LevelParent() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    LevelParent.prototype.onAddToStage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, group;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadMap()];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, this.renderMap(res)];
                    case 2:
                        _a.sent();
                        group = this.getGroupByName('roles');
                        this.primaryRole = group.getObjectById(this.primaryRoleId);
                        return [2 /*return*/];
                }
            });
        });
    };
    LevelParent.prototype.loadMap = function () {
        var _this = this;
        // 初始化请求
        this.request = new egret.HttpRequest();
        return new Promise(function (resolve) {
            // 监听资源加载完成事件
            _this.request.once(egret.Event.COMPLETE, function (event) {
                resolve(event.currentTarget.response);
            }, _this);
            // 发送请求
            _this.request.open(_this.url, egret.HttpMethod.GET);
            _this.request.send();
        });
    };
    LevelParent.prototype.renderMap = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                data = egret.XML.parse(response);
                // 初始化地图
                this.tmxTileMap = new tiled.TMXTilemap(1010, 3249, data, this.url);
                // 显示位置从底部开始
                this.tmxTileMap.y = -(this.tmxTileMap.height - this.stage.stageHeight);
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.tmxTileMap.addEventListener(tiled.TMXImageLoadEvent.ALL_IMAGE_COMPLETE, function () {
                            resolve();
                        }, _this);
                        // 渲染
                        _this.tmxTileMap.render();
                        _this.addChild(_this.tmxTileMap);
                    })];
            });
        });
    };
    LevelParent.prototype.getGroupByName = function (name) {
        var groups = this.tmxTileMap.getObjects();
        var group;
        groups.some(function (group2) {
            if (group2.name === name) {
                group = group2;
                return true;
            }
        });
        return group;
    };
    LevelParent.prototype.end = function () {
        this.url = null;
        this.request = null;
        this.tmxTileMap.destory();
        this.removeChildren();
    };
    // 添加虚拟游戏杆
    LevelParent.prototype.addVirtualJoystick = function () {
        var virtualJoystick = new VirtualJoystick(100, 100);
        this.addChild(virtualJoystick);
        console.log(virtualJoystick);
    };
    return LevelParent;
}(egret.DisplayObjectContainer));
__reflect(LevelParent.prototype, "LevelParent", ["Level"]);
//# sourceMappingURL=LevelParent.js.map