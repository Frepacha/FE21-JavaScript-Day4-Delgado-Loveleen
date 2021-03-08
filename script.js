/* Create a program that according to the temperature will provide you with the information, whether the weather is cold or moderate. This program should generate a different random number every time, which should be between -5c and 25c. If the temperature is between -5c and 10c print "The weather is cold" otherwise print "The weather is moderate". 

Hint: Math.random() will give you a random number between 0 and 1, but it will not reach number 0 or 1, so any value between these two numbers (for example 0,315 , 0,91239 0,1) so if you try to multiply it with 10, you can have a random number between 0 and 10 :) . */

let max = 25
let min = -5
let temperature = (Math.random() * (max - min) + min).toFixed(4); // + min mean we work with negative numbers

if (temperature < 10) {
    document.getElementsByClassName("temp")[0].innerHTML = "The weather is cold " + temperature;
} else {
    document.getElementsByClassName("temp")[0].innerHTML = "The weather is moderate " + temperature;
}

/* Create a program to find the highest value in an array. 

E.g. If we have the following values 1, 7, -3, 9 we should only get the highest value, number 9. */

let array = [1, 7, -3, 9];

document.getElementById("max").innerHTML = "The Highest number is: " + (Math.max(...array));

/* Now when you have program Temperature v1.0 done it time to upgrade it to the version 2.0. Now you should create a nice looking responsive front-end for your program (mobile friendly) and create more messages (e.g. if the temperature is above 32c output "The weather is hot" etc.) and you should display a proper image for the current weather condition. */

let max_1 = 40;
let min_1 = -5;
let temperature_1 = (Math.random() * (max_1 - min_1) + min_1).toFixed(4); // + min mean we work with negative numbers

if (temperature_1 < 10) {
    document.getElementById("temp1").innerHTML += "The weather is cold " + temperature_1;
} else if (temperature_1 > 10 && temperature_1 < 32) {
    document.getElementById("temp2").innerHTML += "The weather is moderate " + temperature_1;
} else {
    document.getElementById("temp3").innerHTML += "The weather is hot " + temperature_1;
}

/* Intermediate
Exercise 1 | Compare two numbers


Create a JavaScript program that will show the average grade for each student. Here are the points for each student:

Martin = 76

Thomas = 85

Klaus = 65

Maria = 93

David = 81

Based on their points, output the grade, according to the following table:

< 60 F

< 70 D

< 80 C

< 90 B

< 100 A

Finally, calculate the class average and output it (e.g. if the class average is 74 points, their average grade will be C).*/

/* var students = [
    ['David', 80],
    ['Vinoth', 77],
    ['Divya', 88],
    ['Ishitha', 95],
    ['Thomas', 68]
];

var Avgmarks = 0;

for (var i = 0; i < students.length; i++) {
    Avgmarks += students[i][1];
    var avg = (Avgmarks / students.length);
}

console.log("Average grade: " + (Avgmarks) / students.length);

if (avg < 60) {
    console.log("Grade : F");
} else if (avg < 70) {
    console.log("Grade : D");
} else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
} */
//Try 1
/* var student = [
    ["Martin", 76],
    ["Thomas", 85],
    ["Klaus", 65],
    ["Maria", 93],
    ["David", 81]
];
var avg_grade = 0;

for (var i = 0; i < student.length; i++) {
    avg_grade += student[i];


}



if (avg_grade < 60) {
    document.getElementsByClassName("name")[i].innerHTML += "The student: " + student + "gets the grade F ";
} else if (avg_grade < 70) {
    document.getElementsByClassName("name")[0][1].innerHTML += "The student: " + student + "gets the grade D ";

} else if (avg_grade < 80) {
    document.getElementsByClassName("name")[0][2].innerHTML += "The student: " + student + "gets the grade C ";

} else if (avg_grade < 90) {
    document.getElementsByClassName("name")[0][3].innerHTML += "The student: " + student + "gets the grade B ";
} else if (avg_grade < 100) {
    document.getElementsByClassName("name")[0][4].innerHTML += "The student: " + student + "gets the grade A "; */

//try 2

let classList = [{
        name: 'Martin',
        points: 76
    },
    {
        name: 'Thomas',
        points: 85
    },
    {
        name: 'Klaus',
        points: 65
    },
    {
        name: 'Maria',
        points: 93
    },
    {
        name: 'David',
        points: 81
    }
]

let getGrade = (points) => {
    let grade = ''
    if (points <= 100 && points > 90) {
        grade = 'A';
    } else if (points <= 90 && points > 80) {
        grade = 'B';
    } else if (points <= 80 && points > 70) {
        grade = 'C';
    } else if (points <= 70 && points > 60) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade
}

classList.forEach(student => {
    console.log("Student Name: " + student.name + ", Grade: " + getGrade(student.points))
})