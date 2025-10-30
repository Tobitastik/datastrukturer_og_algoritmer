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
    }

    printList(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

    add(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }

        current.next = newNode;
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
            throw new RangeError("Emepty list");
        }
        return this.head.data;
    }

    getLast(){
        if(!this.head){
            throw new RangeError('Emepty list');
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        return current.data;
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
    }

    remove(index){

    }

    removeFirst(){

    }

    removeLast(){

    }

    size(){

    }

    clear(){

    }

    getNode(index){

    }

    getFirstNode(){

    }

    getLastNode(){

    }

    getNextNode(node){

    }

    getPrevNode(node){

    }

    insertBefore(node, data){

    }

    insertAfter(node, data){

    }

    removeNode(node){

    }
}