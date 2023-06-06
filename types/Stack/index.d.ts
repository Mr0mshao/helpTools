export default class Stack<T extends any> {
    protected dataSource: T[];
    protected top: number;
    constructor();
    push(element: T): void;
    pop(): T;
    peek(): T;
    protected length(): number;
    protected clear(): void;
}
