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
/**
 * 虚拟摇杆
 */
var VirtualJoystick = (function (_super) {
    __extends(VirtualJoystick, _super);
    function VirtualJoystick(width, height) {
        var _this = _super.call(this) || this;
        // 中心点坐标
        _this.centerX = 0;
        _this.centerY = 0;
        // 触摸位置与小球位置
        _this.p1 = new egret.Point();
        _this.p2 = new egret.Point();
        _this.circleRadius = width / 2;
        _this.centerX = width / 2;
        _this.centerY = width / 2;
        _this.ballRadius = _this.circleRadius * 0.3;
        _this.width = width;
        _this.height = height;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        _this.skinName = 'VirtualJoystickSkin';
        return _this;
    }
    VirtualJoystick.prototype.onAddToStage = function () {
        this.x = this.stage.stageWidth * 0.05;
        this.y = this.stage.stageHeight * 0.95 - this.height;
    };
    /**
     * @override
     */
    VirtualJoystick.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    VirtualJoystick.prototype.init = function () {
        this.createCircle();
        this.createBall();
        this.startEvent();
    };
    // 创建圆环
    VirtualJoystick.prototype.createCircle = function () {
        this.circle = new eui.Rect(this.circleRadius * 2, this.circleRadius * 2, 0x666666);
        this.circle.fillAlpha = 0.5;
        this.addChild(this.circle);
        var circleShape = new egret.Shape();
        circleShape.graphics.beginFill(0xff0000, 1);
        circleShape.graphics.drawCircle(this.centerX, this.centerY, this.circleRadius);
        circleShape.graphics.endFill();
        this.addChild(circleShape);
        this.circle.mask = circleShape;
    };
    // 创建小球
    VirtualJoystick.prototype.createBall = function () {
        this.ball = new egret.Shape();
        this.ball.graphics.beginFill(0xff0000, 1);
        this.ball.graphics.drawCircle(this.centerX, this.centerY, this.ballRadius);
        this.ball.graphics.endFill();
        this.addChild(this.ball);
    };
    VirtualJoystick.prototype.startEvent = function () {
        this.circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startAction, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveAction, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.endAction, this);
    };
    VirtualJoystick.prototype.startAction = function (event) {
        this.touchId = event.touchPointID;
        var eve = new egret.Event(VirtualJoystick.ActionStart);
        this.dispatchEvent(eve);
    };
    VirtualJoystick.prototype.endAction = function () {
        var eve = new egret.Event(VirtualJoystick.ActionEnd);
        this.dispatchEvent(eve);
    };
    VirtualJoystick.prototype.moveAction = function (event) {
        if (this.touchId !== event.touchPointID) {
            return;
        }
        this.p1.x = this.x + this.centerX;
        this.p1.y = this.y + this.centerY;
        this.p2.x = event.stageX;
        this.p2.y = event.stageY;
        // 获得触摸到虚拟摇杆距离
        var dist = egret.Point.distance(this.p1, this.p2);
        // 获得触摸点与虚拟摇杆的幅度
        var angle = Math.atan2(event.stageY - this.p1.y, event.stageX - this.p1.x);
        // 手指在圆环范围内
        if (dist <= (this.circleRadius - this.ballRadius)) {
            this.ball.x = event.stageX - (this.x + this.centerX);
            this.ball.y = event.stageY - (this.y + this.centerY);
            // 手指在圆环范围外
        }
        else {
            this.ball.x = Math.cos(angle) * (this.circleRadius - this.ballRadius);
            this.ball.y = Math.sin(angle) * (this.circleRadius - this.ballRadius);
        }
        this.dispatchEventWith(VirtualJoystick.ActionMove, false, angle);
    };
    VirtualJoystick.ActionStart = 'action_start';
    VirtualJoystick.ActionMove = 'action_move';
    VirtualJoystick.ActionEnd = 'action_end';
    return VirtualJoystick;
}(eui.Component));
__reflect(VirtualJoystick.prototype, "VirtualJoystick");
//# sourceMappingURL=VirtualJoystick.js.map