// Question-1-Start
// Answer-1-Start
let age = 25;
let ageAsString = String(age);

console.log(age);
console.log(ageAsString);
console.log(typeof age);
console.log(typeof ageAsString);
// Answer-1-End



// Question-2-Start
// Answer-2-Start
let whether = prompt("Enter Number : ");

if (whether % 2 == 0) {
    alert(whether + " is Even Number");
} else {
    alert(whether + "is Odd Number");
}
// Answer-2-End



// Question-3-Start
// Answer-3-Start
let temperature = 72;
let celsius = (temperature-32)*5/9;
console.log("Temperature concvert into celsius:"+celsius);
// Answer-3-End


// Question-4-Start
// Answer-4-Start
let name1 = prompt("Enter your Name:")
let age1 = prompt("Enter your Age:")
if(age1 >= 18){
 console.log("Welcome " + name1 + " you are an adult");
}
else{
    console.log("Sorry " + name1 + " you are not yet an adult");
}
// Answer-4-End




// Question-5-Start
// Answer-5-Start
let isRaining = true;

let isRaining1 = prompt("It is Raining ? Enter please 'Yes' or 'No' ");


if (isRaining1 == 'Yes' || isRaining1 == 'yes') {
    console.log("Bring an umbrella");
} else if (isRaining1 == 'No'|| isRaining1 == 'no') {
    console.log("Leave the umbrella at home");
} else {
    console.log("Please Enter Yes or No ?");
}
// Answer-5-End



