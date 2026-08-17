export function grade(marks) {
    let grade = "";

    if (marks >= 90) {
        grade = "O";
    } else if (marks >= 80) {
        grade = "A+";
    } else if (marks >= 70) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else {
        grade = "Fail";
    }

    return grade;
}

export function attendance(tDays, pDays){
    let x=0;
    x = (pDays/ tDays)*100;
    x= x.toFixed(2);
    return x;
}

export function showMsg(str){
    console.log(str);
}