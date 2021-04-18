const mymodule = require('./mymodule.js') ;

function bar (cb) {  
    foo(function (err, data) {  
      if (err) { return cb(err) }   
    
      cb(null, data)  
    })  
  }  
