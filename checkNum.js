// using Math.sign() method
function check() {
    var value = document.getElementById('data').value;
    var res = Math.sign(value);
    if (value > 0) {
        res = `${value} is positive number `;
    }
    else if (value == 0) {
         res = `${value} is negative number `;
    } else {
         res = `${value} is not a  number `;
    }
    document.getElementById('res').innerText = res;

   
}