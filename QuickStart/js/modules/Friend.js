"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend = (function () {
    function Friend() {
        this.Greet = function (message) { return console.log(message); };
    }
    Object.defineProperty(Friend.prototype, "FullName", {
        get: function () {
            return this.LastName + "," + this.FirstName;
        },
        enumerable: true,
        configurable: true
    });
    Friend.prototype.Say = function (message) {
        console.log(message);
    };
    return Friend;
}());
exports.Friend = Friend;
