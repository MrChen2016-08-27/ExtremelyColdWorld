/**
 * 虚拟摇杆
 */
class VirtualJoystick extends eui.Component{
    public static readonly ActionStart:string = 'action_start';
    public static readonly ActionMove:string = 'action_move';
    public static readonly ActionEnd:string = 'action_end';
    // 圆环
    private circle:eui.Rect;
    // 小球
    private ball:egret.Shape;
    // 圆环半径
    private circleRadius:number;
    // 小球半径
    private ballRadius:number;
    // 中心点坐标
    private centerX:number = 0;
    private centerY:number = 0;
    // 触摸id
    private touchId:number;
    // 触摸位置与小球位置
    private p1:egret.Point = new egret.Point();
    private p2:egret.Point = new egret.Point();

    constructor(width:number, height:number) {
        super();
        this.circleRadius = width / 2;
        this.centerX = width / 2;
        this.centerY = width / 2;
        this.ballRadius = this.circleRadius * 0.3;
        this.width = width;
        this.height = height;
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.skinName = 'VirtualJoystickSkin';
    }

    public onAddToStage() :void{
        this.x = this.stage.stageWidth * 0.05;
        this.y = this.stage.stageHeight * 0.95 - this.height;
    }
    /**
     * @override
     */
    public childrenCreated(): void{
        super.childrenCreated();
        this.init();
    }

    private init() {
        this.createCircle();
        this.createBall();
        this.startEvent();
    }
    // 创建圆环
    private createCircle() {
        this.circle = new eui.Rect(this.circleRadius * 2, this.circleRadius * 2, 0x666666);
        this.circle.fillAlpha = 0.5;
        this.addChild(this.circle);
        const circleShape: egret.Shape = new egret.Shape();
        circleShape.graphics.beginFill(0xff0000, 1);
        circleShape.graphics.drawCircle(this.centerX, this.centerY, this.circleRadius);
        circleShape.graphics.endFill();
        this.addChild(circleShape);
        this.circle.mask = circleShape; 
    }
    // 创建小球
    private createBall() {
        this.ball = new egret.Shape();
        this.ball.graphics.beginFill(0xff0000, 1);
        this.ball.graphics.drawCircle(this.centerX, this.centerY, this.ballRadius);
        this.ball.graphics.endFill();
        this.addChild(this.ball);
    }

    private startEvent() {
        this.circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startAction, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveAction, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.endAction, this);
    }

    private startAction(event:egret.TouchEvent) {
        this.touchId = event.touchPointID;
        const eve = new egret.Event(VirtualJoystick.ActionStart);
        this.dispatchEvent(eve);
    }
    public endAction() {
       const eve = new egret.Event(VirtualJoystick.ActionEnd);
        this.dispatchEvent(eve); 
    }
    private moveAction(event:egret.TouchEvent) {
        if (this.touchId !== event.touchPointID) {
            return;
        }
        this.p1.x = this.x + this.centerX;
        this.p1.y = this.y + this.centerY;
        this.p2.x = event.stageX;
        this.p2.y = event.stageY;
        // 获得触摸到虚拟摇杆距离
        const dist = egret.Point.distance(this.p1, this.p2);
        // 获得触摸点与虚拟摇杆的幅度
        const angle:number = Math.atan2(event.stageY - this.p1.y, event.stageX - this.p1.x);
        // 手指在圆环范围内
        if (dist <= ( this.circleRadius - this.ballRadius )) {
            this.ball.x = event.stageX - (this.x + this.centerX);
            this.ball.y = event.stageY - (this.y + this.centerY);
            // 手指在圆环范围外
        } else {
            this.ball.x = Math.cos(angle) * (this.circleRadius - this.ballRadius);
            this.ball.y = Math.sin(angle) * (this.circleRadius - this.ballRadius);
        }
        this.dispatchEventWith(VirtualJoystick.ActionMove, false, angle);
                            
    }
}