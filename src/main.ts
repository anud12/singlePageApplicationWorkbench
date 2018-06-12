import {OnInit} from "./decorator/OnInit.decorator";
import {RouteHandler, RouterService} from "./service/Router.service";
import {Inject} from "typescript-ioc";

@OnInit
class MyRouterService extends RouterService {
}

@OnInit
class UserController implements RouteHandler {
    @Inject routerService: MyRouterService

    constructor() {
        this.routerService.addRoute("/user", this);
    }

    public onEnter() {
        console.log("Entered on user")
    }

    public onExit() {
        console.log("Exited on user")
    }
}

@OnInit
class DashboardController implements RouteHandler {
    @Inject routerService: MyRouterService

    constructor() {
        this.routerService.addRoute("/dashboard", this);
    }

    public onEnter() {
        console.log("Entered on dashboard")
    }

    public onExit() {
        console.log("Exited on dashboard")
    }
}