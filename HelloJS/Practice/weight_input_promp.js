var name = prompt("What is your name?", "Giant Peng");
var height = prompt("How tall are you? (cm)", "0");
var weight = prompt("How much do you weight? (kg)", "0");

var ideal_W = (height - 100) * 0.9;
var diff = weight - ideal_W;
var result = weight >= ideal_W - 5 && weight <= ideal_W + 5;
result = result ? "You are healthy." : "You are not healthy.";

document.write("Hey " + name + ", " + result, "<br>");

if (diff > 0) {
    document.write("You are " + diff + "kg Overweight", "<br>");
} else if (diff < 0) {
    document.write("You are " + diff + "kg Unederweight", "<br>");
}

document.write("Ideal weight for your height is " + ideal_W + "kg.", "<br>");
