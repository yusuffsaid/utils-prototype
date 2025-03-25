# ts-utils-prototype

This library is a collection of utility functions designed to simplify common operations in TypeScript/JavaScript projects.

## Why Use This Library?

- **Reduces Code Duplication**: No need to rewrite common operations repeatedly
- **Readability**: Perform complex operations with a single method call
- **Type Safety**: Fully compatible with TypeScript, ensuring type-safe operations
- **Performance**: Develop faster with optimized methods
- **Maintainability**: Easier code maintenance using a centralized library

## Installation and Usage

Using npm:
```bash
npm install ts-utils-prototype
```

Using yarn:
```bash
yarn add ts-utils-prototype
```

## Object Utilities

### Methods

#### `isEmpty(): boolean`
Returns true if the object has no properties.

#### `count(): number`
Returns the number of properties in the object.

#### `has(key: string): boolean`
Checks if the object has the specified property.

#### `flatten(prefix?: string): object`
Flattens nested objects into a single-level object with dot notation keys.
```typescript
const obj = { a: { b: 1, c: 2 } };
obj.flatten(); // { "a_b": 1, "a_c": 2 }
```

#### `pick(keys: string[]): object`
Creates a new object with only the specified properties.
```typescript
const obj = { a: 1, b: 2, c: 3 };
obj.pick(['a', 'c']); // { a: 1, c: 3 }
```

#### `omit(keys: string[]): object`
Creates a new object without the specified properties.
```typescript
const obj = { a: 1, b: 2, c: 3 };
obj.omit(['b']); // { a: 1, c: 3 }
```

## Array Utilities

### Methods

#### `isEmpty(): boolean`
Returns true if the array has no elements.

#### `chunk(size: number): T[][]`
Splits array into chunks of specified size.
```typescript
const arr = [1, 2, 3, 4, 5];
arr.chunk(2); // [[1, 2], [3, 4], [5]]
```

#### `flatten(depth?: number): T[]`
Flattens a nested array up to the specified depth.
```typescript
const arr = [1, [2, [3, 4]]];
arr.flatten(2); // [1, 2, 3, 4]
```

#### `remove(element: T): void`
Removes the first occurrence of an element from the array.
```typescript
const arr = [1, 2, 3];
arr.remove(2); // [1, 3]
```

#### `groupBy(key: string): Record<string, T[]>`
Groups array elements by a specified key.
```typescript
const arr = [{type: 'A', value: 1}, {type: 'B', value: 2}, {type: 'A', value: 3}];
arr.groupBy('type'); // { A: [{type: 'A', value: 1}, {type: 'A', value: 3}], B: [{type: 'B', value: 2}] }
```

#### `partition(predicate: (value: T) => boolean): [T[], T[]]`
Splits array into two groups based on a predicate function.
```typescript
const arr = [1, 2, 3, 4, 5];
arr.partition(x => x % 2 === 0); // [[2, 4], [1, 3, 5]]
```

#### `sortBy(key: string, order?: "asc" | "desc"): T[]`
Sorts array by a specified key in ascending or descending order.
```typescript
const arr = [3, 1, 4, 2];
arr.sortBy('', 'asc'); // [1, 2, 3, 4]
```

## String Utilities

### Methods

#### `toTitleCase(): string`
Converts string to title case.
```typescript
"hello world".toTitleCase(); // "Hello World"
```

#### `toSnakeCase(): string`
Converts string to snake case.
```typescript
"helloWorld".toSnakeCase(); // "hello_world"
```

#### `toCamelCase(): string`
Converts string to camel case.
```typescript
"hello world".toCamelCase(); // "helloWorld"
```

#### `removeWhitespace(): string`
Removes all whitespace from string.
```typescript
"hello world".removeWhitespace(); // "helloworld"
```
```

