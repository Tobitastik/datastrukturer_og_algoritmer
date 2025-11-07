class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    printList(){
        let current = this.head;
        const result = [];
        while(current){
            console.log(current.data);
            result.push(current.data);
            current = current.next;
        }
        return result;
    }

    add(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        
        this.size++;
    }

    addLast(data){  
        this.add(data);
    }

    addFirst(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.size++;
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            throw new RangeError("Index out of bounds");
        }

        let current;
        if (index < this.size / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
        } else {
            current = this.tail;
            for (let i = this.size - 1; i > index; i--) {
                current = current.prev;
            }
        }

        return current.data;
    }

    getFirst(){
        return this.head ? this.head.data : null;
    }

    getLast(){
        return this.tail ? this.tail.data : null;
    }

    set(index, data) {
    if (index < 0 || index >= this.size) {
        throw new RangeError("Index out of bounds");
    }

    let current;

    if (index < this.size / 2) {
        current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
    } else {
        current = this.tail;
        for (let i = this.size - 1; i > index; i--) {
            current = current.prev;
        }
    }

    current.data = data;
    }

    insert(index, data) {
    if (index < 0 || index > this.size) {
        throw new RangeError("Index out of bounds");
    }

    const newNode = new Node(data);

    if (index === 0) {
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    else if (index === this.size) {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }
    else {
        let current;
        if (index < this.size / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) current = current.next;
        } else {
            current = this.tail;
            for (let i = this.size - 1; i >= index; i--) current = current.prev;
        }

        const prevNode = current.prev;
        newNode.prev = prevNode;
        newNode.next = current;
        prevNode.next = newNode;
        current.prev = newNode;
    }

    this.size++;
    }


    insertAfter(node, data) {
    if (!node) throw new Error("Node cannot be null");

    const newNode = new Node(data);

    newNode.prev = node;
    newNode.next = node.next;

    if (node.next) {
        node.next.prev = newNode;
    } else {
        this.tail = newNode;
    }

    node.next = newNode;
    this.size++;
    }


    insertBefore(node, data) {
    if (!node) throw new Error("Node cannot be null");

    const newNode = new Node(data);

    if (node === this.head) {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    } else {
        const prevNode = node.prev;
        newNode.prev = prevNode;
        newNode.next = node;
        prevNode.next = newNode;
        node.prev = newNode;
    }

    this.size++;
    }


    remove(index) {
    if (index < 0 || index >= this.size) {
        throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
        this.removeFirst();
        return;
    }

    if (index === this.size - 1) {
        this.removeLast();
        return;
    }

    let current;
    if (index < this.size / 2) {
        current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
    } else {
        current = this.tail;
        for (let i = this.size - 1; i > index; i--) {
            current = current.prev;
        }
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;

    this.size--;
}


    removeFirst(){
        if(!this.head) return;
        
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.mext;
            this.head.prev = null;
        }

        this.size--;
    }

    removeLast() {
    if (!this.tail) return;

    if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
    } else {
        this.tail = this.tail.prev;
        this.tail.next = null; 
    }

    this.size--;
}

    size(){
        return this.size;
    }

    clear(){
        this.head = null;
        this.tail = null;
        this.size = 0;      
    }

    getNode(index){

    }

    getFirstNode(){
        if(!node){
            throw new Error("Not a node");
        }
        
        if(!this.head){
            console.log("List is empty");
            return null;
        }

        return this.head;
    }

    getLastNode(){
        if(!node){
            throw new Error("Not a node");
        }
        
        if(!this.head){
            console.log("List is empty");
            return null;
        }

        return this.tail;
    }

    getNextNode(node){
        if(!node){
            throw new Error("Not a node");
        }
        
        if(!this.head){
            console.log("List is empty");
            return null;
        }

        return node.next;
    }

    getPrevNode(node){
        if(!node){
            throw new Error("Not a node");
        }

        if(!node.prev){
            console.log("No previous node");
            return null;
        }

        return node.prev;
    }

    insertBeforeNode(index, data){
        if(index < 0 || index >= this.size){
            throw new RangeError("Index out of bounds");
        }

        const current = this.getNode(index);
        const newNode = new Node(data);

        if(current === this.head){
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else{
            const prevNode = current.prev;
            newNode.prev = prevNode;
            newNode.next = current;
            prevNode.next = newNode;
            current.prev = newNode;
        }

        this.size++;
    }

    insertAfterNode(index, data){
        if(index < 0 || index >= this.size){
            throw new RangeError("Index out of bounds");
        }

        const current = this.getNode(index);
        const newNode = new Node(data);

        newNode.prev = current;
        newNode.next = current.next;

        if(current.next){
            current.next.prev = newNode;
        } else{
            this.tail = newNode;
        }

        current.next = newNode;
        this.size++;
    }

    removeNode(node){
        if(!node){
            throw new Error("Not a node");
        }

        if(node === this.head){
            this.removeFirst();
        }

        if(node === this.tail){
            this.removeLast();
        }

        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = null;
        node.prev = null;

        this.size--;
    }

    swap(nodeA, nodeB){
        if(!nodeA || nodeB){
            throw new Error("Invalid nodes");
        }

        if(nodeA === nodeB){
            return;
        }

        const prevA = nodeA.prev;
        const nextA = nodeA.next;
        const prevB = nodeB.prev;
        const nextB = nodeB.next;

        if(nextA === nodeB){
            nodeA.prev = nodeB;
            nodeA.next = nextB;
            nodeB.prev = prevA;
            nodeB.next = nodeA;
        } else if (nextB === nodeA) { 
        nodeB.prev = nodeA;
        nodeB.next = nextA;
        nodeA.prev = prevB;
        nodeA.next = nodeB;
        if (prevB) prevB.next = nodeA;
        if (nextA) nextA.prev = nodeB;
        } else {
            if(prevA) prevA.next = nodeB;
            if(nextA) nextA.prev = nodeB;
            if(prevB) prevB.next = nodeA;
            if(nextB) nextB.prev = nodeA;

            nodeA.prev = prevB;
            nodeA.next = nextB;
            nodeB.prev = prevA;
            nodeB.next = nextA;
        }

        if(this.head === nodeA) this.head = nodeB;
        else if(this.head === nodeB) this.head = nodeA;

        if(this.tail === nodeA) this.tail = nodeB;
        else if(this.tail === nodeB) this.tail = nodeA;
    }
}