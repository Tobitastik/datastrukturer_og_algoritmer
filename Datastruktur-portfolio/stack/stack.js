export class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

export class Stack{
    constructor(){
        this.head = null;
        this._size = 0;
    }

    push(data){
        const newNode = new Node(data);

        newNode.next = this.head;
        
        this.head = newNode;
        
        this._size++;
    }

    pop(){
        if (!this.head) {
            throw new RangeError("Empty stack");
        }

        const removedData = this.head.data;
        this.head = this.head.next;
        this._size--;
    
        return removedData;
    }

    peek(){
        if(!this.head){
            throw new RangeError("Empty stack");
        }
        return this.head.data;
    }

    size(){
        return this._size;
    }

    get(index){
        if(index < 0  || index >= this._size){
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
    }
}