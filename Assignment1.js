let nestedUserObject = {
    user : {
        profile : {
            personalDetails : {
                name : 'Pragnya'
            }
        }
    }
}
function valueFinder(obj, path) {
    var p = path.split('.');
    var i, value = obj;
    for(i=0; i < p.length; i++) {
        if(value[p[i]] == undefined) {
            return 'Does not exist';
        } else {
            value = value[p[i]];
        }
    }
    return value;
}
var a = valueFinder(nestedUserObject , 'user.profile.personalDetails.name');
var b = valueFinder(nestedUserObject , 'user.profile.personalDetails.name.age');
