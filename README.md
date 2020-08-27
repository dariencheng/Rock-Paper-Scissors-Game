UNDERSTANDING THE PROBLEM

- Create a javascript-based rock-paper-scissor game that takes user input via UI buttons and compares that against a randomly generated computer input each round, declaring a winner each time and keeping a running score. The game will play until either the user or the computer reaches 5 wins and announce a winner via DOM
- Javascript rendition of this: https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors

PSEUDO CODE

- Create variables for query selecting 3 buttons, results element, X number of p elements, and a object scoreCard
- Create game function that adds an event listener to each button, takes user input via the button.id, takes computer input via computerPlay function, and compares the two inputs using a playRound function
    - computerPlay function based on a random number generator between 1 - 3
    - playRound function based on a series of if statements on all possible combinaions
    - game continues to play while scoreCard.wins < 5 and scoreCard.losses < 5
- Within the same game function, take the result of the comparison and add it to a Score function
    - Score function updates the scoreCard
- Within the same game function, output the cumulative score through a scoreCard and append to HTML via JS
- Within the same game function, create an if statement that showing once either user or computer reaches a score of 5, run the announceWinner() function and append to HTML via JS

PROJECT THOUGHTS
- Struggled with organizing the JS in a way that is concise and efficient
- Struggled getting the syntax right for DOM manipulation; good exercise to familiarize learning how