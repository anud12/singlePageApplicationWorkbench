import {AutoWired, Container, Inject} from "typescript-ioc/es5";
import {HelloWorldService} from "./service/HelloWorldService";
import {OnInit} from "./decorator/OnInit.decorator";

@OnInit
class MyClass {
    @Inject
    private helloWorldService: HelloWorldService;

    constructor() {
        this.helloWorldService.printService.print("My Class initialized")
    }
}

@OnInit
class TestClass {
    constructor() {
        console.log("TestClass initialized");
    }
}