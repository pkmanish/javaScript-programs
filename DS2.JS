function shoutWordPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i] + " " + arr[j]);
        }
    }
}
shoutWordPairs(["conoodle", "wabbit", "alcoholic"]);

//------------------------------------

function shoutWordPairs(arr, arr2) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            console.log(arr[i] + " " + arr2[j]);
        }
    }
}
shoutWordPairs(["conoodle", "wabbit", "alcoholic"], ["cucamonga", "seattle"]);
