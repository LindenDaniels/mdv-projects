
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

getArea();

*/

		

/*
Linden Daniels
SDI1501
Project 2
*/

var stringHolder = "I'm a string.",
    myNum = 7,
    sex = true
    feedMe = false
    
;

 
 if (sex === "male")
 	{
 	var gender = "He";
 	}
 	else {
 		var gender = "She";
 		}

while (sex != "male" && sex != "female")
	
			var sex = prompt ("Congratulations! You have just brought " +
					"home a new Toy Fox Terrier puppy. These dogs are small, " +
					"black and white or brown, and resemble a mix between a " +
					"Chihuahua and a Rat Terrier. Is your puppy a male or female?");
					
				var chooseSex = function(){	if (sex === "male")
											{
												alert ("You've chosen a male puppy.");
											}
											if (sex === "female")
											{
											alert ("You've chosen a female puppy.");
											
							} }
	chooseSex();
							
							var myName = prompt ("What would you like to name your new puppy?")
 	console.log ("Your new puppy's name is " + myName + ".")
 	
 	console.log (myName + " barks happily at you and twirls around in a circle. " + gender +
 	" then peers up at you expectantly with large puppy dog eyes.")
 	
 	
 	
				
				
var feedPup = function() {

var feedMe = confirm (myName + " is hungry! Would you like to feed " + myName + "?")

    if (feedMe === true)

    {

        for (foodCounter = 5; foodCounter >= 1; foodCounter--)

        {

            var feedMe = confirm (myName + " happily gobbles down the bowl of food. " +

            "Would you like to feed " + myName + " again?")

        }

        console.log ("Uh oh! You have run out of food.");

        }

        else {

            console.log ("You have chosen not to feed " + myName + ".")

        }

}



 
 feedPup();
 

 
 
 		
 
 
 






