/*

        Here we use Heron of Alexandria's method to find the square root of a given number.

        The algorithm states that to find the square root of a number we take an initial guess
        and check whether that number is "close enough" to the square root of the actual
        number. To check this idea of close enough we multiply our guess by itself and see if
        the value of the product is within the specified tolerance. if it is, we accept the value
        of the current guess as that of the square root otherwise we make another guess.

*/


function conditional(predicate, then_clause, else_clause) {

    /*

        The below line of code never executes as the conditional function itself is never called.

    */
    console.log("Opaa!!");
    return predicate ? then_clause : else_clause;
}


function squareRoot(num,guess=1,tolerance=0.001){

    // return is_goodEnough(number,guess,tolerance)?guess:squareRoot(number,average(number,guess),tolerance);

    /*

        The reason the below code goes into an infinite loop is very subtle. As we have passed
        the recursive call as one of the parameters of the conditional its value is evaluated first
        according to the applicative order of evaluation. The recursive call never finishes thus
        the conditional function is never actually called.


    */





    return conditional(is_goodEnough(num,guess,tolerance),guess,squareRoot(num,average(num,guess)));
}

function average(num,guess){
    return (guess+(num/guess))/2;
}

function is_goodEnough(num,guess,tolerance){

    // console.log("These are the values", num, guess, tolerance);
    return Math.abs(num-(guess*guess))<tolerance;
}


console.log(squareRoot(5));