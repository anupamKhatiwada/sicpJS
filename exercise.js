

function square(x){
    return x*x;
}




function sumOfSquares(a,b,c){
    
    return a>=b?square(a)+(b>c?square(b):square(c)):square(b)+(a>c?square(a):square(c));
    
}

function ss2(a,b,c){
    return square(a)+square(b)+square(c)-square(a<b?a<c:false?a:b<c?b:c);
    
}

sumOfSquares(2,1,3);



 

