import {AutoWired, Inject} from "typescript-ioc";
import {LokiConnector} from "../service/LokiConnector";
import {Collection} from "lokijs"
import {Entity} from "../model/Entity.model";

@AutoWired
export class EntityRepository {

    @Inject lokiConnector: LokiConnector;
    private collection: Collection;

    constructor() {
        console.log("Creating collection: entity");
        this.collection = this.lokiConnector
            .getDatabase()
            .addCollection("entity", {
                unique: ['id']
            });


    }

    public getCollection(): Collection<Entity> {
        return this.collection;
    }
}