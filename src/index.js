"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./utils/string");
require("./utils/array");
require("./utils/object");
const obj = {
    name: "John",
    age: 30,
    city: "New York",
    address: {
        street: "123 Main St",
        zip: "10001",
    },
};
console.log(obj.pick(["name", "age"]));
console.log(obj.omit(["city", "address"]));
console.log(obj.flatten());
