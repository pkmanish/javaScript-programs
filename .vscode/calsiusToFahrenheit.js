// fahrenheit = celsius * 1.8 + 32
function convert() {
    var c = document.getElementById('data').ariaValueMax;
    var f = (c * 1.8) + 32;
    document.getElementById('res').innerText = `${c} c = ${f} f`;
    
 }