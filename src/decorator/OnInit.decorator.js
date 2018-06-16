"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typescript_ioc_1 = require("typescript-ioc");
var onInit = [];
function OnInit(constructor) {
    console.log("OnInit");
    onInit.push(constructor);
    typescript_ioc_1.Singleton(constructor);
}
exports.OnInit = OnInit;
function loadAll() {
    console.log("loadAll");
    onInit.forEach(function (value) {
        typescript_ioc_1.Container.get(value);
    });
}
exports.loadAll = loadAll;
window.onload = loadAll;
//# sourceMappingURL=OnInit.decorator.js.map