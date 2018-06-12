import {PrintService} from "./PrintService";
import {AutoWired, Inject} from "typescript-ioc";

@AutoWired
export class HelloWorldService {
    @Inject public printService: PrintService;

    constructor() {
        this.printService.print("HelloWorldService initialized");
    }
}