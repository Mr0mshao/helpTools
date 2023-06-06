export default interface ListInterface<T extends any[]> {
    listSize: number;
    pos: number;
    dataSource: T[];
    clear(): void;
    find(element: T): number;
    toString(): T[];
    insert(element: T, after: T): boolean;
    append(element: T): void;
    remove(element: T): boolean;
    front(): void;
    end(): void;
    prev(): void;
    next(): void;
    hasNext(): void;
    lenght(): void;
    currPos(): void;
    moveTo(): void;
    getElement(): void;
    contains(element: T): boolean;
}
export default class List<T> implements ListInterface<T> {
    listSize: number;
    pos: number;
    dataStore: T[];
}
