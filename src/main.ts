import * as Router5 from 'router5'
import browserPlugin from 'router5/plugins/browser';
import {Route, Router} from "router5/create-router";
import {PluginFactory} from "router5/core/plugins";

var router: Router = Router5.createRouter([]).usePlugin(browserPlugin({
    useHash: true
}));

var userRoute: Route = {
    name: "user",
    path: "/user"
};
router.add(userRoute);

var userDetailsRoute: Route = {
    name: "userDetails",
    path: "/user/details"
};
router.add(userDetailsRoute);

var dashboardRoute: Route = {
    name: "dashboard",
    path: "/dashboard"
};

router.add(dashboardRoute);

var plugin: PluginFactory = function (router, dependencies) {
    return {
        pluginName: "MY_PLUGIN",
        onTransitionSuccess: (toState, fromState) => {
            console.log('Yippee, navigation to ' + toState.name + ' was successful!');
            console.log(toState);
            console.log(fromState);
        },
        onTransitionError: (toState, fromState, err) => {
            console.log(toState);
            console.log(fromState);
            console.log(err);
        },
        onTransitionStart: (toState, fromState) => {
            console.log('Starting, navigation to ' + toState.name);
        }

    };
} as any;

plugin.pluginName = "MY_PLUGIN";

router.usePlugin(plugin);


router.start("/user");

console.log("Routing started");