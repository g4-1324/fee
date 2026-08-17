"use strict";
console.clear();
console.log();

const{grade,showMsg}=require("./myModule.js");

const prompt =require("prompt-sync")();
const marks=parseFloat(prompt("enter marks: "));

let str="";
let result="";

if(marks>=0 && marks<=100){
    result=grade(marks);
    str= `Grade is ${result}`;
}
else{
    str=`invalid input`;
}

showMsg(str);
console.log();