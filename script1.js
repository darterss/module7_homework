const objFirst = {
    e : 5
}
const obj = Object.create(objFirst);
obj.a = 1;
obj.b = 2;
obj.c = 3;
obj.d = 4;

function inspectObj (obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key))
            console.log(key + ' : ' + obj[key])
    }
}

inspectObj (obj);