import {PrintService} from "./PrintService";
import {AutoWired, Inject} from "typescript-ioc";

@AutoWired
export class LoggerService {
    @Inject private printService: PrintService;

    constructor() {
        this.printService.print("Initialized");
    }
}