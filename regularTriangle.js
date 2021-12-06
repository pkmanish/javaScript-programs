// formula -  s=(a+b+c)/2
var a = 10;
var b = 5;
var c = 10;
var s = (a + b + c) / 2;
var temp = s * (s - a) * (s - b) * (s - c);
var area = Math.sqrt(temp);
console.log(area);
