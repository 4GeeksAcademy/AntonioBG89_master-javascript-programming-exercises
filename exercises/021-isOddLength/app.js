// Write your function here
function isOddLength(str){
    if (str.length % 2 === 0) return false;
    else return true;
}

let output = isOddLength('special');
console.log(output); // true
