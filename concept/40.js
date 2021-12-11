// Code 2
  
  const a = function(){
    console.log(this);
  
    const b = {
      func1: function(){
        console.log(this);
      }  
    }
  
    const c = {
      func2: ()=>{
        console.log(this);
      }
    }
  
    b.func1();
    c.func2();
  }
  
a();
  

//    o/p

// global/window object
// object "b"
// global/window object