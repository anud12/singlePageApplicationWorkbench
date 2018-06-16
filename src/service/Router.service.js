"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router5 = require("router5");
var browser_1 = require("router5/plugins/browser");
function RouteEnter(target, key, value) {
}
exports.RouteEnter = RouteEnter;
function RouteExit(constructor, routePath) {
}
exports.RouteExit = RouteExit;
var RouterService = /** @class */ (function () {
    function RouterService() {
        this.router = Router5.createRouter([])
            .usePlugin(browser_1.default({
            useHash: true
        }));
    }
    return RouterService;
}());
exports.RouterService = RouterService;
//# sourceMappingURL=Router.service.js.map