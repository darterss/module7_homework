const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
const str = 'b';

function inspectObj (obj, str){
    for (let key in obj){
        if (key === str) return true;
    }
    return false;
}

console.log(inspectObj (obj, str));