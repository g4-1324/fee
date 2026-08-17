"use strict";
console.clear();
console.log();

import { grade, showMsg } from "./myModule.js";

import promptSync from "prompt-sync";
const prompt = promptSync();

const marks = parseFloat(prompt("Enter marks: "));

let str = "";
let result = "";

if (marks >= 0 && marks <= 100) {
    result = grade(marks);
    str = `Grade is ${result}`;
}
else {
    str = `Invalid input`;
}

showMsg(str);
console.log();