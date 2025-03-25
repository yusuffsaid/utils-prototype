"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.isEmpty = function () {
    return this.length === 0;
};
Array.prototype.chunk = function (size) {
    const result = [];
    for (let i = 0; i < this.length; i += size) {
        result.push(this.slice(i, i + size));
    }
    return result;
};
Array.prototype.flatten = function (depth = 1) {
    return this.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) && depth > 0
            ? toFlatten.flatten(depth - 1)
            : toFlatten);
    }, []);
};
Array.prototype.remove = function (element) {
    const index = this.indexOf(element);
    if (index > -1) {
        this.splice(index, 1);
    }
};
Array.prototype.groupBy = function (key) {
    return this.reduce((result, item) => {
        const groupKey = item[key];
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(item);
        return result;
    }, {});
};
Array.prototype.partition = function (predicate) {
    const passed = [];
    const failed = [];
    for (const item of this) {
        if (predicate(item)) {
            passed.push(item);
        }
        else {
            failed.push(item);
        }
    }
    return [passed, failed];
};
Array.prototype.sortBy = function (key, order = "asc") {
    return this.sort((a, b) => {
        if (typeof a === "number" && typeof b === "number") {
            return order === "asc" ? a - b : b - a;
        }
        if (typeof a === "string" && typeof b === "string") {
            const comparison = a.localeCompare(b);
            return order === "asc" ? comparison : -comparison;
        }
        if (typeof a === "number" && typeof b === "string") {
            return order === "asc" ? a - parseFloat(b) : parseFloat(b) - a;
        }
        if (typeof a === "string" && typeof b === "number") {
            return order === "asc" ? parseFloat(a) - b : b - parseFloat(a);
        }
        return 0;
    });
};
