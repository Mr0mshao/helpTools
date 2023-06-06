export default interface ListInterface<T extends any[]> {
    listSize: number
    pos: number
    dataSource: T[]
    clear (): void
    find (element: T): number
    toString (): T[]
    insert (element: T, after: T): boolean
    append(element: T): void
    remove(element: T): boolean
    front(): void
    end (): void
    prev (): void
    next (): void
    hasNext(): void
    lenght(): void
    currPos(): void
    moveTo (): void
    getElement(): void
    contains(element: T): boolean
}
export default class List<T> implements ListInterface<T> {
    listSize: number = 0
    pos: number = 0
    dataStore: T[] = []
    clear () {
        this.dataSource = []
        this.listSize = 0
        this.pos = 0
    }
    find(element: T) {
        for (let i  = 0; i < this.dataSource.length; i++) {
            if (this.dataSource[i] == element) {
                return i
            }
        }
        return -1
    }
    toString() {
        return this.dataSource
    }
    insert(element: T, after: T){
        const insertAt = this.find(after)
        if (insertAt > -1) {
            this.dataSource.splice(insertAt + 1, 0, element)
            ++this.listSize
            return true
        }
        return false
    }
    append(element: T) {
        this.dataStore[this.listSize++] = element
    }
    remove(element: T) {
        const findAt: number = this.find(element)
        if (findAt > -1) {
            this.dataSource.splice(findAt, 1)
            --this.listSize
            return true
        }
        return false
    }
    front() {}
    end () {}
    prev () {}
    next () {}
    hasNext(){}
    lenght(){}
    currPos(){}
    moveTo () {}
    getElement(){}
    contains(element: T){
        for (let i = 0; i < this.dataSource.length; i++) {
            if (this.dataSource[i] == element) {
                return true
            }
        }
        return false
    }
}


const a = new List()