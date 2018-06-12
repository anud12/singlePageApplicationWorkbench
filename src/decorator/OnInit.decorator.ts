import {Container, Singleton} from "typescript-ioc";

const onInit: Array<Function> = [];

export function OnInit(constructor: any) {
    console.log("OnInit");
    onInit.push(constructor);
    Singleton(constructor);
}

export function loadAll() {
    console.log("loadAll");
    onInit.forEach(value => {
        Container.get(value);
    });
}

window.onload = loadAll as any;