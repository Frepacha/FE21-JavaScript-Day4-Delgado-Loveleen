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