function reverseNumber()
{
let num = document.getElementById("numberInput").value;

let reverse = 0;

while(num > 0)
{
let digit = num % 10;
reverse = reverse * 10 + digit;
num = Math.floor(num / 10);
}

let newPage = window.open("");

newPage.document.write("<h1 style='text-align:center'>Reverse Number</h1>");
newPage.document.write("<h2 style='text-align:center'>" + reverse + "</h2>");
}