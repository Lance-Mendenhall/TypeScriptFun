"use strict";
exports.__esModule = true;
var Friends = /** @class */ (function () {
    function Friends(n, a, e, b) {
        this.names = n;
        this.age = a;
        this.email = e;
        this.bestFriend = b;
    }
    Friends.prototype.about = function () {
        return "name: " + this.names + ", age: " + this.age + ", email: " + this.email + ", bestFriend: " + this.bestFriend;
    };
    return Friends;
}());
exports.Friends = Friends;
