//Big O 
//non contiguous DS

//push: O(1)
//pop: O(n)
// : O(1)
//removal at beginning: O(1)
//insert:O(n)
//remove:O(n)
//get: O(n)
//set: O(n)

//node creation
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }

    }
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        temp.next = this.head;
        temp.next = null
        this.length--;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp.next = temp;
        }
        return temp;
    }
    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
    insert(index, value) {
        if (index === 0) return this.unshift(value);
        if (index === this.length) this.push(value);
        if (index < 0 || index >= this.length) return undefined
        let newNode = new Node(value);
        let temp = this.get(index - 1);

        newNode.next = temp.next;
        temp.next = newNode
        this.length++

        return true;
    }
    remove(index) {
        if (index === 0) return this.shift();
        if (index === this.length) this.pop();
        if (index < 0 || index >= this.length) return undefined
        let temp = this.get(index - 1);
        let next = temp.next;

        temp.next = next.next;
        next.next = null;

        this.length--

        return temp;
    }
    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let pre = null;
        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next
        }
        return this;
    }
}