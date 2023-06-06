

class Nodes<T> {
    element: T
    next: Nodes<T> | null
    constructor (element: T) {
        this.element = element
        this.next = null
    }
}

class linkList<T> {
    private head: Nodes<T> | null
    private length: number
    constructor () {
        this.head = null
        this.length = 0
    }

    append (element: T) {
        const newNode = new Nodes(element)
        if (this.head != null) {
            newNode.next = this.head
        } else {
            let current: Nodes<T> = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = newNode
        }
        this.length++
    }

    // insert (position: number,  element: T): boolean {
    //     if (position < 0 || position > this.length) {
    //         return false
    //     }

    // }

    find (element: T): Nodes<T> | null {
        let current: Nodes<T> = this.head
        while (current.element != element) {
            current = current.next
        }
        return current
    }
}