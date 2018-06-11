import * as loki from "lokijs"


export class LokiConnector {
    private db: any;

    constructor() {
        this.db = new loki("ant-colony");
    }

    public getDatabase(): any {
        return this.db;
    }
}