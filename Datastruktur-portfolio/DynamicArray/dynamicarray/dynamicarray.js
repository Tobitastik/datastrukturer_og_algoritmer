import StaticArray from "../staticarray/staticarray.js";

export default class DynamicArray { 
    #_arr;
    #_size;

    constructor(initialCapacity = 10){
        this.#_arr = new StaticArray(initialCapacity);
        this.#_size = 0;
    }

    capacity() {
        return this.#_arr.length;
    }

    size(){
        return this.#_size;
    }

    set(index, item){
        if(index < 0 || index >= this.#_size){
            throw new RangeError("Index out of bounds");
        }
    }

    grow(){
        const newCapacity = this.capacity()*2;
        const newArr = new StaticArray(newCapacity);
        for(let i = 0; i < this.#_size; i++){
            newArr.set(i, this.#_arr.get(i));
        }
        this.#_arr = newArr
    }

    add(item){
        if (this.#_size >= this.capacity()){
            this.grow();
        }
        this.#_arr.set(this.#_size, item);
        this.#_size++;
    }

    get(index){
        if (index < 0 || index >= this.#_size){
            throw new RangeError("Index out of bounds");
        }
        return this.#_arr.get(index);
    }
}