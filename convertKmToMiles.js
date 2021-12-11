// 1km = 0.621371
// miles = km * factor
var Kms = document.getElementById('data').ariaValueMax;
const factor = 0.621371;
var miles = Kms * factor;
document.getElementById('res').innerText = `${miles} miles`;
document.getElementById('res').innerText = miles + 'miles';