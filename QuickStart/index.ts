import {Friend} from "./modules/Friend";

var friend = new Friend();
friend.FirstName = "Bruce";
friend.LastName = "Wu";

console.log(`hello ${friend.FullName}`);

friend.Say("Hello!");
friend.Greet("Good Morning!");