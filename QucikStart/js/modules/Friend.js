"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend = (function () {
    function Friend() {
    }
    Object.defineProperty(Friend.prototype, "FullName", {
        get: function () {
            return this.LastName + "," + this.FirstName;
        },
        enumerable: true,
        configurable: true
    });
    return Friend;
}());
exports.Friend = Friend;
