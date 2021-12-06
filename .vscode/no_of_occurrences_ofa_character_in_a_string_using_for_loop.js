var string = prompt(" Please enter a string");
var let = prompt("Please enter a letter");
let strLen = string.length;
var counter = 0;
for (var i = 0; i < strLen ; i++){
    if (string[i] == letter) {
        counter++;
    }
}
console.log(`${string} => ${letter} => ${counter}`);
