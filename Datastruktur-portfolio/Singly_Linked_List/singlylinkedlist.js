class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
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
            this.tail = newNode;
        }
        
        this.size++;
    }

    get(index){
        if(index < 0){
            throw new RangeError("Index out of bounds");
        }

        let current = this.head;
        let count = 0;

        while(current){
            if(count === index){
                return current.data;
            }
            current = current.next;
            count++;
        }

        throw new RangeError("Index out of bounds");
    }

    getFirst(){
        if(!this.head){
            throw new RangeError("Empty list");
        }
        return this.head.data;
    }

    getLast(){
        if(!this.tail){
            throw new RangeError('Empty list');
        }

        return this.tail.data;
    }

    set(index, data){
       if(index < 0){
        throw new RangeError("Index out of bounds");
       }
       let current = this.head;
       let count = 0;

       while(current){
        if(count === index){
            current.data = data;
            return;
        }
        current = current.next;
        count++;
       }

       throw new RangeError("Index out of bounds");
    }
    
    insert(index, data){
        if(index < 0){
            throw new RangeError("Index out of bounds");
        }
        const newNode = new Node(data);

        if(index === 0){
            newNode.next = this.head;
            this.head = newNode;
            if(!this.tail) this.tail = newNode;
        } else{
            const prev = this.getNode(index - 1);
            newNode.next = prev.next;
            prev.next = newNode;
            if(newNode.next === null) this.tail = newNode;
        }
        this.size++;
    }

    removeFirst(){ 
        if(!this.head) return;
        this.head = this.head.next;
        this.size--;
        if(this.size === 0) this.tail = null;
    }

    removeLast(){
        if(!this.head) return;

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else{
            let current = this.head;
            while(current.next !== this.tail){
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }

        this.size--;
    }

    remove(index){
        if(index < 0 || index >= this.size){
            throw new RangeError("Index out of bounds");
        }

        if(index === 0){
            this.removeFirst();
            return;
        }

        if(index === this.size-1){
            this.removeLast();
            return
        }

        let prev = this.head;
        for(let i = 0; i < index-1; i++){
            prev = prev.next;
        }

        prev.next = prev.next.next;
        this.size--;    
    }

    clear(){
        this.head = null;
        this.tail = null;
        this.size = 0;      
    }

    getNode(index){
        if(index < 0 || index >= this.size){
            throw new RangeError("Index out of bounds");
        }

        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next;
        }
        return current;
    }

    getFirstNode(){
        return this.head;
    }

    getLastNode(){
        return this.tail;
    }

    getNextNode(node){
        if(!node){
            throw new Error("Not a node");
        }
        return node.next;
    }

    getPrevNode(node){
        if(!node){
            throw new Error("Not a node");
        }
        
        if(node === this.head){
            return null;
        }

        let current = this.head;
        while (current && current.next !== node){
            current = current.next;
        }

        return current || null;
    }

    insertBefore(node, data){
        const newNode = new Node(data);

        if(node === this.head){
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
            return;
        }

        const prev = this.getPrevNode(node);
        
        if(!prev){
            throw new RangeError("Index out of bounds");
        }
        prev.next = newNode;
        newNode.next = node;
        this.size++;
    }

    insertAfter(node, data){
        const newNode = new Node(data);

        newNode.next = node.next;
        node.next = newNode;

        if(node === this.tail){
            this.tail = newNode;
        }

        this.size++;
    }

    removeNode(node) {
    if (!this.head || !node) return;

    if (this.head === node) {
        this.head = this.head.next;
        if (node === this.tail) this.tail = null;
        this.size--;
        return;
    }

    let current = this.head;
    while (current.next && current.next !== node) {
        current = current.next;
    }

    if (!current.next) {
        throw new Error("Node not found");
    }

    current.next = node.next;
    if (node === this.tail) this.tail = current;
    this.size--;
}

}