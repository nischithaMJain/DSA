class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return this;
    }
    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.nextSibling;
        }
        return temp;
    }
    set(index, value) {
        const getIndex = this.get(index);
        if (getIndex) {
            getIndex.value = value;
        }
        return this;
    }
    insert(index, value) {
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index < 0 || index >= this.length) {
            return undefined
        }
        const before = this.get(index - 1);
        const after = before.next;
        const newNode = new Node(value);
        newNode.next = after;
        after.prev = newNode;
        before.next = newNode;
        newNode.prev = before;
        this.length++;
        return this;

    }
    remove(index, value) {
        if (index === 0) return this.shift()
        if (index === this.length) return this.pop()
        if (index < 0 || index >= this.length) {
            return undefined
        }
        const temp = this.get(index)
        temp.prev.next = temp.next;
        temp.prev = null;
        temp.next.prev = temp.prev;
        temp.next = nullthis.length--;
        return temp;
    }
}