
            /*use strict. */

            var greetUser = prompt("Hello, What is your name?");
            console.log(greetUser,", welcome to the site.");
            alert(greetUser + ", welcome to the site.");



            var itemsOnDisplay = prompt("Did you see the items on display?", "yes or no")
            if (itemsOnDisplay.toLowerCase() === "yes"){
                console.log("Nice, the company has a variety of products")
                alert("Nice, the company has a variety of products")
            }
            else if (itemsOnDisplay === "no"){
                console.log("Take a look, if you have time.")
                alert("Take a look, if you have time.")
            }
           else {alert("You did not enter yes or no")};



           var likeTheMovieOrNot = prompt("Do you like the movie?", "yes or no")
            if (likeTheMovieOrNot.toLowerCase() === "yes"){
                console.log("That is good")
                alert("That is good")
            }
            else if (likeTheMovieOrNot === "no"){
                console.log("Okay, there are other movies you can try.")
                alert("Okay, there are other movies you can try.")
            }
           else {alert("You did not enter yes or no")};


           
           var commuteDistance = prompt("Are the two offices close to each other?", "yes or no")
            if (commuteDistance.toLowerCase() === "yes"){
                console.log("That is right")
                alert("That is right")
            }
            else if (commuteDistance.toLowerCase() === "no"){
                console.log("Okay, that is good to know.")
                alert("Okay, that is good to know.")
            }
           else {alert("You did not enter yes or no")};



          var rainyDayOrNot = prompt("Is it raining in your location?", "yes or no")
            if (rainyDayOrNot.toLowerCase() === "yes"){
                console.log("Okay, there is rain in today's weather forecast")
                alert("Okay, there is rain in today's weather forecast")
            }
            else if (rainyDayOrNot.toLowerCase() === "no"){
                console.log("good to know.")
                alert("good to know.")
            }
           else {alert("You did not enter yes or no")};



           var goingToStore = prompt("Are you going to store today?", "yes or no")
            if (goingToStore.toLowerCase() === "yes"){
                console.log("alright")
                alert("alright")
            }
            else if (goingToStore.toLowerCase() === "no"){
                console.log("Okay. Just a reminder, the store will be closed tomorrow.")
                alert("Okay. Just a reminder, the store will be closed tomorrow.")
            }
           else {alert("You did not enter yes or no")};


           alert(greetUser + ", thank you for visiting the site.");



     

