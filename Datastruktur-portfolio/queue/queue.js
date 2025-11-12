class QueueNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    peek(){
        if(!this.head){
            throw new RangeError("Empty list");
        }
        return this.head.data;
    }

    enqueue(data){
        const newNode = new QueueNode(data);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        
        this.size++;
    }

    size(){
        return this._size;
    }

    dequeue() {
        if (!this.head) {
            throw new RangeError("Empty queue");
        }

        const removedData = this.head.data;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = null; 
        }

        this._size--;
        return removedData;
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
}