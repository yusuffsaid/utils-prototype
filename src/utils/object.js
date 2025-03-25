"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.prototype.isEmpty = function () {
    return Object.keys(this).length === 0;
};
Object.prototype.count = function () {
    return Object.keys(this).length;
};
Object.prototype.has = function (key) {
    return this.hasOwnProperty(key);
};
Object.prototype.flatten = function (prefix = "") {
    let result = {};
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            const prop = this[key];
            const newKey = prefix ? `${prefix}_${key}` : key;
            if (typeof prop === "object" && prop !== null) {
                result = Object.assign(Object.assign({}, result), prop.flatten(newKey));
            }
            else {
                result[newKey] = prop;
            }
        }
    }
    return result;
};
Object.prototype.pick = function (keys) {
    const result = {};
    keys.forEach((key) => {
        if (key in this) {
            result[key] = this[key];
        }
    });
    return result;
};
Object.prototype.omit = function (keys) {
    const result = Object.assign({}, this);
    keys.forEach((key) => {
        delete result[key];
    });
    return result;
};
