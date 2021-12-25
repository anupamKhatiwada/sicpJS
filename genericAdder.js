/*

    Below are three adder functions that add values strating from one number and end after reaching a larger number.
    The way they add values are different and those are quite self evident upon looking at the functions.
    Most part of the functions are same. The only part that is different is the actual application procedure of adding the values.
    The general pattern of recursion is the same for all three functions.
    
    
    Our objective is to write a generic adder function which takes replacable add functions so that we can abstract out the recursive
    part. 
    


*/




function cube(x) {
    return x * x * x;
}

function sum_cubes(a, b) {
    return a > b
           ? 0
           : cube(a) + sum_cubes(a + 1, b);
}




function sum_integers(a, b) {
    return a > b
           ? 0
           : a + sum_integers(a + 1, b);
}




function pi_sum(a, b) {
    
    
    let relation  = (a) => 1 / (a * (a + 2));
    let incrementer = (a) => a+4;
    
    
    
    return genericAdder(a,b,relation,incrementer);
}






function genericAdder(a,b,additionRelation,incrementer){
    return a > b
           ? 0
           : additionRelation(a,b) + genericAdder(incrementer(a,b), b);
    /*
        
        We are passing both the available parameters while calling the inner functions because we di
    
    
    */
    
    
    
}









