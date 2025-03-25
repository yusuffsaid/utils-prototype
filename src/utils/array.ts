export {};

declare global {
  interface Array<T> {
    isEmpty(): boolean;
    chunk(size: number): T[][];
    flatten(depth?: number): T[];
    remove(element: T): void;
    groupBy(key: string): Record<string, T[]>;
    partition(predicate: (value: T) => boolean): [T[], T[]];
    sortBy(key: string, order?: "asc" | "desc"): T[];
  }
}

Array.prototype.isEmpty = function <T>(): boolean {
  return this.length === 0;
};
Array.prototype.chunk = function <T>(size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < this.length; i += size) {
    result.push(this.slice(i, i + size));
  }
  return result;
};
Array.prototype.flatten = function <T>(depth: number = 1): T[] {
  return this.reduce((flat: any[], toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) && depth > 0
        ? toFlatten.flatten(depth - 1)
        : toFlatten
    );
  }, []);
};
Array.prototype.remove = function <T>(element: T): void {
  const index = this.indexOf(element);
  if (index > -1) {
    this.splice(index, 1);
  }
};
Array.prototype.groupBy = function <T>(key: string): Record<string, T[]> {
  return this.reduce((result: Record<string, T[]>, item: T) => {
    const groupKey = (item as any)[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
};
Array.prototype.partition = function <T>(
  predicate: (value: T) => boolean
): [T[], T[]] {
  const passed: T[] = [];
  const failed: T[] = [];

  for (const item of this) {
    if (predicate(item)) {
      passed.push(item);
    } else {
      failed.push(item);
    }
  }

  return [passed, failed];
};
Array.prototype.sortBy = function (
  key: string,
  order: "asc" | "desc" = "asc"
): (string | number)[] {
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
