// Code 3:


(function(){
  setTimeout(()=> console.log(1),2000);
  console.log(2);
  setTimeout(()=> console.log(3),0);
  console.log(4);
})();

// out put -
// 2
// 4
// 3
// 1
// After two seconds