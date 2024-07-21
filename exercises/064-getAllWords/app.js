function getAllWords(str) {
    // your code here
    let newStr = str.split(" ");
    return newStr;
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
