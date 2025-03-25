export {};

declare global {
  interface Object {
    [key: string]: any;
    isEmpty(): boolean;
    count(): number;
    has(key: string): boolean;
    flatten(prefix?: string): object;
    pick(keys: string[]): object;
    omit(keys: string[]): object;
  }
}

Object.prototype.isEmpty = function (): boolean {
  return Object.keys(this).length === 0;
};
Object.prototype.count = function (): number {
  return Object.keys(this).length;
};
Object.prototype.has = function (key: string): boolean {
  return this.hasOwnProperty(key);
};
Object.prototype.flatten = function (prefix: string = ""): object {
  let result: any = {};

  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      const prop = this[key];
      const newKey = prefix ? `${prefix}_${key}` : key;

      if (typeof prop === "object" && prop !== null) {
        result = { ...result, ...prop.flatten(newKey) };
      } else {
        result[newKey] = prop;
      }
    }
  }

  return result;
};
Object.prototype.pick = function (keys: string[]): object {
  const result: any = {};

  keys.forEach((key) => {
    if (key in this) {
      result[key] = this[key];
    }
  });

  return result;
};

Object.prototype.omit = function (keys: string[]): object {
  const result: any = { ...this };

  keys.forEach((key) => {
    delete result[key];
  });

  return result;
};
