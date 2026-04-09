class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) { 
        // initialization
        this.capacity = capacity;
        this.size = 0;
        this.Array = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        if(i<this.size) {
            return this.Array[i]
        }
        return null
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.Array[i]=n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.size < this.capacity) {
        let newIndex = this.size;
          this.set(newIndex, n);
          this.size = this.size +1;
        }
        else if (this.size === this.capacity) {
            this.resize()
            this.set(this.size,n)
            this.size++
        }
    }

    /**
     * @returns {number}
     */
    popback() {
        const popped = this.get(this.getSize()-1)
        this.size--
        return popped
    }
    

    /**
     * @returns {void}
     */
    resize() {
        const newArray = new Array(2*this.capacity);
        for (let i=0; i<this.getSize(); i++) {
            newArray[i]=this.get(i)
        }
        this.Array=newArray
        this.capacity *=2
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }
}
