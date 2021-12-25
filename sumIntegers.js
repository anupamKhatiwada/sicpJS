// SICP JS 1.3.1

/* 

        The example shows a recursive implementation of the sum of squares function.
        We have implemented the iterative version of the solution as well. Always implement the iterative version
        of the solution as well and always visualize the process while writing functions.


        The below function is the iterative
        version of the sum_integers function.
     
*/


 function iter(i,t){
            
      return i<=0
        ?t
        :iter(i-1,t+i);
        
       
    }
    
    
//     iter(10,0);
    
    


function sum_integers(a, b) {
    return a > b
          ? 0
          : a + sum_integers(a + 1, b);
}

sum_integers(1, 10);


