class Fun {
    constructor(arrayData) {
        this.data = arrayData;
    }
    next() {
        i=i+1;
        return arrayData[i];
    }
    current() {
        return arrayData[i];
    }
    previous() {
        i=i-1;
        return arrayData[i];
    }
    reset() {
        i=0;
        return arrayData[i];
    }
    top() {
        return Math.max(...arrayData);
    }
    floor() {
        return Math.min(...arrayData);
    }
    currentIndex() {
        return i;
    }
    previousIndex() {
        return i-1;
    }
    nextIndex() {
        return i+1;
    }
}
let arrayData = new Array(1,2,3,4,5,6);
let i=0;
let users = new Fun(arrayData);
let ne = users.next();
let pr = users.previous();
let cr = users.current();
let t = users.top();
let ci = users.currentIndex();
let f = users.floor();
let pi = users.previousIndex();
let ni = users.nextIndex();
let r = users.reset();
let n = users.next();
