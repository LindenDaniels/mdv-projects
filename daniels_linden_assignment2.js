
/* 

DON'T FORGET TO WORK WITHIN THE BRANCH!!! 
		git checkout ldaniels
			checkout master
			merge ldaniels
			commit -a -m "Comment."

AND (p && q) 
OR (p || q) 
NOT (!p) 
XOR (Either or but not both.) (p || q && !(p && q)

if/else spacing:

if (myAge >= 0 && myAge <= 10)
{
	document.write("myAge is between 0 and 10<br />");
	if (myAge == 5)
	{
		document.write("You're 5 years old.");
	}
	
}
else
{
	document.write("myAge is not between 0 and 10.");
}

var pi = 3.14159

var getArea = function (){}; does not automatically run,
							control over when it runs

if () {}; code executed immediately
for () {}; executed immediately, runs multiple times

*/

		

/*
Linden Daniels
SDI1501
Project 2
*/

var stringHolder = "I'm a string.",
    myNum = 7,
    myBoolean = true
;

var degFahren = new Array (212, 32, - 459.15);
var degCent = new Array();
var loopCounter;

for (loopCounter = 0; loopCounter <= 2;
loopCounter++)
{
	degCent[loopCounter] = 5/9 *
(degFahren[loopCounter] - 32);
}

for (loopCounter = 2; loopCounter >= 0;
loopCounter--)
{
	document.write("Value " + loopCounter + " was " + 
	degFahren[loopCounter] + 
	" degrees Fahrenheit");
		document.write(" which is " + degCent[loopCounter] +
		" degrees centigrade<br />");
}
