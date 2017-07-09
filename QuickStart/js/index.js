"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend_1 = require("./modules/Friend");
var friend = new Friend_1.Friend();
friend.FirstName = "Bruce";
friend.LastName = "Wu";
console.log("hello " + friend.FullName);
friend.Say("Hello!");
friend.Greet("Good Morning!");
