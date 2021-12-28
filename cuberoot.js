function root(num,guess=1,tolerance=0.001){

    return is_goodEnough(num,guess,tolerance)?guess:root(num,average(num,guess),tolerance);

}

function average(num,guess){
    // return (guess+(num/guess))/2;

    return ((num/(guess*guess))+(2*guess))/3;

}


function is_goodEnough(num,guess,tolerance){

    const change = Math.abs(average(num,guess)-guess);
    return change<(tolerance*num)?true:false;
}


console.log(root(5));
