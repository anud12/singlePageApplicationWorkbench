"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loki = require("lokijs");
var LokiConnector = /** @class */ (function () {
    function LokiConnector() {
        this.db = new loki("ant-colony");
    }
    LokiConnector.prototype.getDatabase = function () {
        return this.db;
    };
    return LokiConnector;
}());
exports.LokiConnector = LokiConnector;
//# sourceMappingURL=LokiConnector.js.map