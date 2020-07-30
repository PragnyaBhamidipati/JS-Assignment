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
            var i=0, value = obj;
            while(i < p.length) {
                if(value[p[i]] == undefined) {
                    return val;
                } else {
                    value = value[p[i]];
                }
                i++;
            }
            return value;
        }
    }       
console.log(valueFinder(nestedUserObject,'xyz')('user.profile.personalDetails.name'));
console.log(valueFinder(nestedUserObject,'xyz')('user.profile.personalDetails.name.age'));
