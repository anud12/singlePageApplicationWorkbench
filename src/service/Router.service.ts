///<reference path="../../node_modules/router5/index.d.ts"/>
import * as Router5 from 'router5'
import browserPlugin from 'router5/plugins/browser';
import {Router} from "router5/create-router";

export interface RouteHandler {
    onEnter();

    onExit();
}

const routeMapping: Map<string, RouteHandler> = new Map();

export class RouterService {
    private router: Router;


    constructor() {
        console.log("Router initialized");
        this.router = Router5.createRouter([])
            .usePlugin(browserPlugin({
                useHash: true
            }))
            .usePlugin(this.createPlugin as any);
        this.router.start();
    }

    public addRoute(path: string, handler: RouteHandler) {
        if (routeMapping.has(path)) {
            console.error(path + " already exists!")
        }
        routeMapping.set(path, handler);
        this.router.add([{path: path, name: path}]);
        console.log("Registered path : " + path);
    }

    public createPlugin(router, dependencies) {
        return {
            onTransitionSuccess: (toState, fromState) => {
                console.log('Yippee, navigation to ' + toState.name + ' was successful!');
                if (fromState !== null) {
                    routeMapping.get(fromState.name).onExit();
                }
                if (toState !== null) {
                    routeMapping.get(toState.name).onEnter();
                }
            }
        };
    }
}