class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

export class LinkedList<T> {
    head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    public insert(data: T) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    public traverse() {
        let current = this.head;
        let output = ``;
        while (current !== null) {
            output += ` ${current?.data} ${current.next !== null ? "->" : ""}`;
            current = current.next;
        }

        console.log(output);
    }
}
