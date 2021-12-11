// recursion
function add(number) {
  if (number <= 0) {
    return 0;
  } else {
    return number + add(number - 1);
  }
}

add(3)
 //          => 3 + add(2)
 //         3 + 2 + add(1)
 //         3 + 2 + 1 + add(0)
 //         3 + 2 + 1 + 0 = 6  
 // ----------------------------------------------------
function computeSum(arr){
  if(arr.length === 1){
    return arr[0];
  }
  else{
    return arr.pop() + computeSum(arr);
  }
}

computeSum([7, 8, 9, 99]); // Returns 123