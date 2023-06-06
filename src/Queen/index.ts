export default class Queen<T> {
    private dataSource: T[] = []
    constructor () {
        this.dataSource = []
    }

    enqueue(element: T): void {
        this.dataSource.push(element)
    }
    dequeue(): T | undefined {
        return this.dataSource.shift()
    }
    front(): T {
        return this.dataSource[0]
    }
    isEmpty(): boolean {
        if (this.dataSource.length === 0) return false
        return true
    }
    size(): number {
        return  this.dataSource.length
    }
    toString(): string {
        let str = ''
        for (let i = 0; i < this.dataSource.length; i++) {
            str += this.dataSource[i] +''
        }
        return str
    }
    clear(): void {
        this.dataSource = []
    }
    peek(): T | undefined {
        return this.dataSource[this.dataSource.length - 1]
    }
}