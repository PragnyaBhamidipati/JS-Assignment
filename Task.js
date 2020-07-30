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

let nestedUserObject = {
    user : {
        place : 'hyd',
        profile : {
            personalDetails : {
                name : 'Pragnya'
            }
        }
    }
}

function valueFinder(obj,val) {
   return (path) => {
        var p = path.split('.');
            var value = obj;
            var users = new Fun(p);
            while(users.current()) {
                if(value[p[users.currentIndex()]] == undefined) {
                    return val;
                } else {
                    value = value[p[users.currentIndex()]];
                }
                users.next();
            }
            return value;
        }
    }       
console.log(valueFinder(nestedUserObject,'xyz')('user.profile.personalDetails.name'));
console.log(valueFinder(nestedUserObject,'xyz')('user.profile.personalDetails.name.age'));
console.log(valueFinder(nestedUserObject,'xyz')('user.place'));
