"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelloWorldService_1 = require("./service/HelloWorldService");
var EntityRepository_1 = require("./repository/EntityRepository");
var Dot = require("dot");
console.log("Init");
var logService = new HelloWorldService_1.HelloWorldService();
var entityCollection = new EntityRepository_1.EntityRepository().getCollection();
var collection = entityCollection.count();
console.log(collection);
entityCollection.insert({ id: 0, name: "name" });
entityCollection.insert({ id: 1, name: "name" });
entityCollection.insert({ id: 2, name: "name" });
entityCollection.insert({ id: 3, name: "name" });
var item = entityCollection.findOne({ id: 0 });
console.log(item);
item.name = "newName";
entityCollection.update(item);
var templateString = "" +
    "<div>Hi {{=it.id}}!</div>" +
    "<div>{{=it.name || ''}}</div>";
var template = Dot.template(templateString);
var domList = document.getElementsByTagName("body");
console.log(domList);
domList[0].innerHTML = template(entityCollection.findOne({ id: 1 }));
//# sourceMappingURL=templateAndDatabaseExample.js.map