function calculateGPA(){

let courses = document.querySelectorAll(".course");
let credits = document.querySelectorAll(".credits");
let grades  = document.querySelectorAll(".grade");

let totalPoints = 0;
let totalCredits = 0;

for(let i=0;i<courses.length;i++){
let cr = parseFloat(credits[i].value);
let gr = parseFloat(grades[i].value);

if(!isNaN(cr) && !isNaN(gr)){
totalPoints += cr * gr;
totalCredits += cr;
}
}

if(totalCredits === 0){
document.getElementById("result").innerHTML = "No data entered";
return;
}

let gpa = totalPoints / totalCredits;

let student = document.getElementById("student").value;
let semester = document.getElementById("semester").value;

let html = `
<h3>Result</h3>
<p><b>Student:</b> ${student}</p>
<p><b>Semester:</b> ${semester}</p>
<p><b>GPA:</b> ${gpa.toFixed(2)}</p>
`;

document.getElementById("result").innerHTML = html;
}
