var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ConstNotices = (function () {
    function ConstNotices() {
    }
    ConstNotices.STARTUP = 'startup';
    ConstNotices.GET_GANE_CONFIG = 'get_game_config';
    ConstNotices.GAME_CONFIG_COMPLETE = 'game_config_complete';
    ConstNotices.LOGIN = 'login';
    ConstNotices.LOGIN_RESULT = 'login_result';
    return ConstNotices;
}());
__reflect(ConstNotices.prototype, "ConstNotices");
//# sourceMappingURL=ConstNotices.js.map