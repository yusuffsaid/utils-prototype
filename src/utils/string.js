"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.toTitleCase = function () {
    return this.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
};
String.prototype.toSnakeCase = function () {
    return this.replace(/\s+/g, "_")
        .replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`)
        .replace(/^[\_]+|[\_]+$/g, "");
};
String.prototype.toCamelCase = function () {
    return this.replace(/\s(.)/g, (match, group1) => group1.toUpperCase())
        .replace(/\s+/g, "")
        .replace(/^(.)/, (match, group1) => group1.toLowerCase());
};
String.prototype.removeWhitespace = function () {
    return this.replace(/\s+/g, "");
};
