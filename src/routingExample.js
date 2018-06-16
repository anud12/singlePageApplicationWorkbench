"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router5 = require("router5");
var browser_1 = require("router5/plugins/browser");
var router = Router5.createRouter([]).usePlugin(browser_1.default({
    useHash: true
}));
var userRoute = {
    name: "user",
    path: "/user"
};
router.add(userRoute);
var userDetailsRoute = {
    name: "userDetails",
    path: "/user/details"
};
router.add(userDetailsRoute);
var dashboardRoute = {
    name: "dashboard",
    path: "/dashboard"
};
router.add(dashboardRoute);
var plugin = function (router, dependencies) {
    return {
        pluginName: "MY_PLUGIN",
        onTransitionSuccess: function (toState, fromState) {
            console.log('Yippee, navigation to ' + toState.name + ' was successful!');
            console.log(toState);
            console.log(fromState);
        },
        onTransitionError: function (toState, fromState, err) {
            console.log(toState);
            console.log(fromState);
            console.log(err);
        },
        onTransitionStart: function (toState, fromState) {
            console.log('Starting, navigation to ' + toState.name);
        }
    };
};
plugin.pluginName = "MY_PLUGIN";
router.usePlugin(plugin);
router.start("/user");
console.log("Routing started");
//# sourceMappingURL=routingExample.js.map