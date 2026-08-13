console.clear();
const prompt = require("prompt-sync")();
const section = "64";

let totalStudents = parseInt(prompt("Enter total number of students: "));

console.log("\nEnter students details:");
let students = [];

for (let i = 0; i < totalStudents; i++) {
    console.log(`\nStudent ${i + 1} Details`);
    let id = parseInt(prompt("Enter Id: "));
    let name = prompt("enter name: ");
    let cgpa = parseFloat(prompt("Enter CGPA: "));
    let student = { id, name, cgpa };
    students = [...students, student];
    console.log("One object entered into array");
}

console.log("\nMaster entry completed");

console.log("\nNow update MarksBase");
let maxMarks = 100;
let marksBase = [];

for (let i = 0; i < totalStudents; i++) {
    console.log(`\nEnter Marks for Student ${i + 1} `);
    let idValue = parseInt(prompt("Enter Id: "));
    let dbmsMarks = parseInt(prompt("Enter DBMS Marks: "));
    let feeMarks = parseInt(prompt("Enter FEE Marks: "));

    let sMarks = { id: idValue, dbms: dbmsMarks, fee: feeMarks };
    marksBase.push(sMarks);
    console.log("Marks Base updated..");
}

function fAverage(dbmsMarks, feeMarks) {
    let average = (dbmsMarks + feeMarks) / 2;
    return average;
}

function fGrade(average) {
    let grade = "";
    if (average >= 90) {
        grade = "O";
    }
    else if (average >= 80) {
        grade = "A+";
    }
    else if (average >= 70) {
        grade = "A";
    }
    else {
        grade = "B";
    }
    return grade;
}

let srNo = 1;
console.log("\nResult:- \nSrNo. \tId \tName \t\tDBMS \tFEE \tAvg \tGrade");

for (let element1 of students) {
    var dbms = 0;
    var fee = 0;
    var average = 0;
    var grade = "";

    for (let element2 of marksBase) {
        if (element2.id === element1.id) {
            dbms = element2.dbms;
            fee = element2.fee;
            var avg = (a, b) => (a + b) / 2;
            average = avg(dbms, fee);
            grade = fGrade(average);
            break;
        }
        else {
            continue;
        }
    }

    let nameTabs = "";
    if (element1.name.length >= 8) {
        nameTabs = "\t";
    } else {
        nameTabs = "\t\t";
    }

    console.log(
        `${srNo} \t${element1.id} \t${element1.name}${nameTabs}${dbms} \t${fee} \t${average} \t${grade}`
    );
    srNo++;
}