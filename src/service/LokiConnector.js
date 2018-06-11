"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LokiConnector = /** @class */ (function () {
    function LokiConnector() {
        this.db = new loki("ant-colony", { autosave: false });
    }
    LokiConnector.prototype.getDatabase = function () {
        return this.db;
    };
    return LokiConnector;
}());
exports.LokiConnector = LokiConnector;
