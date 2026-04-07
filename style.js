function calculateResult(){

let n = Number(document.getElementById("n").value);

let total = 0;

for(let i=1; i<=n; i++){

let marks = Number(prompt("Enter marks of subject " + i));

total = total + marks;

}

let average = total / n;
let percentage = average;

let grade;

if(percentage >= 90){
grade = "A+";
}
else if(percentage >= 75){
grade = "A";
}
else if(percentage >= 60){
grade = "B";
}
else if(percentage >= 50){
grade = "C";
}
else{
grade = "Fail";
}

document.getElementById("result").innerHTML =
"Total = " + total +
"<br>Average = " + average +
"<br>Percentage = " + percentage + "%" +
"<br>Grade = " + grade;

}


