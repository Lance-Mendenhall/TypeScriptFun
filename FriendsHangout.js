"use strict";
exports.__esModule = true;
var Friends_1 = require("./Friends");
var Bob = new Friends_1.Friends("George", 32, "asdf@gfds.com", true);
var Fred = new Friends_1.Friends("Fred", 21, "fred@gfds.com", false);
var Rachael = new Friends_1.Friends("Rachael", 27, "rachael@gfds.com", false);
var Wombat = new Friends_1.Friends("Wombat", 5, "wombat@gfds.com", false);
var Horse = new Friends_1.Friends("Horse", 17, "horse@gfds.com", false);
console.log(Wombat.about());
var friendArray = [Bob, Fred, Rachael, Wombat, Horse];
for (var _i = 0, friendArray_1 = friendArray; _i < friendArray_1.length; _i++) {
    var entry = friendArray_1[_i];
    console.log(entry.about());
    //console.log(entry);
}
