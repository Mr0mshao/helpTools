

export default class Stack<T extends any> {
    protected dataSource: T[] = []
    protected top: number = 0
    constructor () {}
    push (element: T): void {
        this.dataSource[this.top++] = element
    }

    pop (): T {
        return this.dataSource[this.top--]
    }

    peek (): T {
        return this.dataSource[this.top - 1]
    }

    protected length (): number {
        return this.top
    }

    protected clear (): void {
        this.dataSource = []
        this.top = 0
    }
}