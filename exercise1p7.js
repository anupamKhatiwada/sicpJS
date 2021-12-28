/*

    The point of this exercise is to optimise newton's (Heron of Alexandria's) square root algorithm.
    It does not work well for both very small and very large numbers (I can make an educated guess
    as to why it does not work well for very small numbers because in case of very small numbers the
    tolerance value itself will be quite large relative to the number. For very large numbers also
    apparently the algorithmis not very great because of apparent limited precision of arithmetic
    operations which I don't really understand why).

    First part of the prblem states that we should explain the statement that it fails for very
    large and very small numbers and demonstrate this.


    As the tolerance value is more than the value of the number whose square root
    is to be calculated we see that the algorithm fails miserably for the value of 0.005.

    It will also fail for very large numbers because when guess becomes significanlty large
    the value of guess*guess will overflow the available precision and we will get a wrong answer.


    The third phase of the thw question states that we should apply a different implementation of the
    is_good_enough function to watch how guess changes from one iteration to the next and stop
    when the change is the very small fraction of the guess. We need to design a function that uses
    this kind of end test. We also need to check of it works better for small and large numbers.


    It states in the problem definition that we need to keep track of how the guess changes with each
    iteration. If the change in the proportion is less than a specified tolerance RATIO then we
    assume that the guess is accurate.


*/





function squareRoot(num,guess=1,tolerance=0.001){

    return is_goodEnough(num,guess,tolerance)?guess:squareRoot(num,average(num,guess),tolerance);

}

function average(num,guess){
    return (guess+(num/guess))/2;
}


/*

    It says that the alternative technique to implement the is_good_enough function is to watch how
    guess changes each iteration and to stop when the change is very small fraction of the guess.


    How do we implement this??

*/

function is_goodEnough(num,guess,tolerance){

    const change = Math.abs(average(num,guess)-guess);
    return change<(tolerance*num)?true:false;
}

/*

    We observe that this particular implementation works well for both very small and very large
    numbers. The reason it works well for very larger numbers is because there is no guess*guess
    so the possibility of overflow is averted.

*/

console.log(squareRoot(0.005))
