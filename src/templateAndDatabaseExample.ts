import {HelloWorldService} from "./service/HelloWorldService";
import {EntityRepository} from "./repository/EntityRepository";
import * as Dot from "dot"


console.log("Init");
let logService = new HelloWorldService();

let entityCollection = new EntityRepository().getCollection();

let collection = entityCollection.count();
console.log(collection);

entityCollection.insert({id: 0, name: "name"});
entityCollection.insert({id: 1, name: "name"});
entityCollection.insert({id: 2, name: "name"});
entityCollection.insert({id: 3, name: "name"});

let item: any = entityCollection.findOne({id: 0});
console.log(item);
item.name = "newName";
entityCollection.update(item);

var templateString = "" +
    "<div>Hi {{=it.id}}!</div>" +
    "<div>{{=it.name || ''}}</div>";

let template = Dot.template(templateString);

let domList = document.getElementsByTagName("body");
console.log(domList);
domList[0].innerHTML = template(entityCollection.findOne({id: 1}));