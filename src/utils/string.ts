export {};

declare global {
  interface String {
    toTitleCase(): string;
    toSnakeCase(): string;
    toCamelCase(): string;
    removeWhitespace(): string;
  }
}

String.prototype.toTitleCase = function (): string {
  return this.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
};
String.prototype.toSnakeCase = function (): string {
  return this.replace(/\s+/g, "_")
    .replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`)
    .replace(/^[\_]+|[\_]+$/g, "");
};
String.prototype.toCamelCase = function (): string {
  return this.replace(/\s(.)/g, (match, group1) => group1.toUpperCase())
    .replace(/\s+/g, "")
    .replace(/^(.)/, (match, group1) => group1.toLowerCase());
};
String.prototype.removeWhitespace = function (): string {
  return this.replace(/\s+/g, "");
};
