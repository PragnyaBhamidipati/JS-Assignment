class Fun {
    constructor(arrayData) {
        this.data = arrayData;
        this.i=0;
    }
    next() {
        this.i=this.i+1;
        return this.data[this.i];
    }
    current() {
        return this.data[this.i];
    }
    previous() {
        this.i=this.i-1;
        return this.data[this.i];
    }
    reset() {
        this.i=0;
        return this.data[this.i];
    }
    top() {
        return this.data[this.data.length-1];
    }
    floor() {
        return this.data[0];
    }
    currentIndex() {
        return this.i;
    }
    previousIndex() {
        return this.i-1;
    }
    nextIndex() {
        return this.i+1;
    }
}
let arrayData = new Array(1,2,3,4,5,6);
let users = new Fun(arrayData);
console.log(users.next());
console.log(users.previous());
console.log(users.current());
console.log(users.top());
console.log(users.currentIndex());
console.log(users.floor());
console.log(users.previousIndex());
console.log(users.nextIndex());
console.log(users.reset());
console.log(users.next());
