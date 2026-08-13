// addEventListener(10,20)

// function expression

var add1=function(a,b){
    let sum=a+b;
    return sum;
}
add1(20,30)


// arrow function
var add2=(a,b) =>{
    let sum=a+b;
    return sum;
}
add2(50,60)

var add3=(a,b) =>a+b
add3(70,80)


var abc123 = a =>a*10
abc123(10)

// template literal
var str1="Once upon a time ..."
var vall=20

console.log(str1,vall)

console.log(`Once upon a time in mumbai dobara... there were ${vall} number of individual dons`)