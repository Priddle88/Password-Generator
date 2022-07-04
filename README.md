# Password-Generator

I have been given code of a webpage for a password generator. The only thing is, the button doesn't work. It is up to me to write the code in javasript to make the button functional and display a password based off of a selected criteria. 

## Process

The first thing I noticed was that the button in the html was already linked to the javascript. When the user clicks on the button, the code runs the writePassword function. There is a function within the function (generatePassword) that is being called to produce the password. I noticed that there wasn't a generatePassword function written yet. I needed to ask how long the user wants the password, so I wrote that prompt first along with the conditional statement to make sure the password had to be 8 - 128 characters long.

I focused on the criteria for the password next. It is a series of confirm prompts with if statements right after. The if statements are to check and enforce what the user wants for their password. I had to add an additional rule that if the prompts return negative, the code would start over.

I created global arrays that contained the alphabet, numbers 0 though 9, and special characters to push into another empty array. For uppercase I just used the .upperCase method on the letter array. After that, I wanted to shuffle the array to mix the order to create a unique password. I also had to make sure the length of the password matches what the user wants. I added a function to shuffle any array passed into the parameter. I used slice to match the length with the user's preference.

I thought I would be done at this point but I started to notice a couple of errors. When the length of the password was large and only one of the selections was chosen, the password would only be the length of the original array. I found a way to repeat the contents of an array, but it would be an exact copy. That meant I had to repeat what I did before and shuffle the array.

I should be good to go, right? Nope. I then realized that if the length of the password was too small. There would be times the numbers and special characters would not show up even though they were selected by the user. I wrote two if statements to check if the length is less than a certain amount and if the options to have those characters added were selected. If both conditions are true, the code will add at least one character of either a number or special to the password. I turned that array into a string and removed the commas. Finally, I returned the finalFinal variable so that it would appear on the webpage.

[Link to site](https://priddle88.github.io/Password-Generator/Develop/index.html)

![Picture of page](./Assets/Screen%20Shot%202022-07-03%20at%207.37.46%20PM.png)
