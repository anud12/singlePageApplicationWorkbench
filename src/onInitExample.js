"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var es5_1 = require("typescript-ioc/es5");
var HelloWorldService_1 = require("./service/HelloWorldService");
var OnInit_decorator_1 = require("./decorator/OnInit.decorator");
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.helloWorldService.printService.print("My Class initialized");
    }
    __decorate([
        es5_1.Inject,
        __metadata("design:type", HelloWorldService_1.HelloWorldService)
    ], MyClass.prototype, "helloWorldService", void 0);
    MyClass = __decorate([
        OnInit_decorator_1.OnInit,
        __metadata("design:paramtypes", [])
    ], MyClass);
    return MyClass;
}());
var TestClass = /** @class */ (function () {
    function TestClass() {
        console.log("TestClass initialized");
    }
    TestClass = __decorate([
        OnInit_decorator_1.OnInit,
        __metadata("design:paramtypes", [])
    ], TestClass);
    return TestClass;
}());
//# sourceMappingURL=onInitExample.js.map