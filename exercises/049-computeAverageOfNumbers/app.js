// Write your function here
function computeAverageOfNumbers(arr){
    let prueba = 0;
    arr.forEach(element => {
        prueba += element;
    });
    if (arr.length === 0) return 0;
    else return prueba / arr.length;
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3
