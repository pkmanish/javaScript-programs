 // Code 3
 //  35. Guess the outputs of the following code:
  const b = {
    name:"Vivek",
    f: function(){
      var self = this;
      console.log(this.name);
      (function(){
        console.log(this.name);
        console.log(self.name);
      })();
    }
  }
  
  b.f();
  

  //    o/p

// "Vivek"
// undefined
// "Vivek" 