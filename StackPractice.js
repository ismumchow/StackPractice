

// creation of a new stack practice 

function newStack (capacity) {
    this.capacity = capacity;  // the maximum size of the stack
    this.storage= {}; //essentially all of the items that will be used on the stack
    this.count = 0; // the index used to access the specific stack (from the object)
}

newStack.prototype.push = function (val) {
    if (this.count < this.capacity){
        this.storage[count++] = val; // storing the val in the stack and incrementing after
        return this.count
    }
    return "the size of the stack exceeds capacity, please pop first"
}

newStack.prototype.pop = function () {
    if (this.count <= 0) {
        val = this.storage[--count]; // storing the val of the item on top of stack (last item will be deleted)
        delete this.storage[count];
        return val; 
    }
    return "there is nothing in the stack"
}

newStack.prototype.peep = function (){ 
    if(this.count != 0){
        return this.storage[this.count -1];
    }
}