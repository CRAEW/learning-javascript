/////////////////////////////
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
*/

(function () {

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.display = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ": " + this.answers[i]);
        }
    };

    Question.prototype.checkAnswer = function (answer) {
        if (answer === this.correct) {
            console.log("Correct answer!");
        } else {
            console.log("That is not the right answer.");
        };
    }

    // 2. Create a couple of questions using the constructor
    var q1 = new Question("What species is Jabba from Star Wars?", ["Ithorian", "Jenet", "Jawa", "Hutt"], 3);
    var q2 = new Question("What\'s the name of the spaceship that can destroy a whole planet?", ["Planet destroyer", "Death Star", "Stargun"], 1);
    var q3 = new Question("What\'s the name of the big villain in Star Wars?", ["Sint", "Vader", "Sith Lord", "Darth Lord"], 2);
    var q4 = new Question("Which robot is not a character in Star Wars?", ["Wal-E", "C-3PO", "R2-D2", "BB-8"], 0);
    var q5 = new Question("What\'s the name of Han Solo\'s ship?", ["Tardis", "Millenium Falcon", "Serenity", "Rocinante"], 1);

    // 3. Store them all inside an array
    var questions = [q1, q2, q3, q4, q5];

    // 4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
    var randomQ = Math.floor(Math.random() * questions.length);

    questions[randomQ].display();

    //5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
    var answer = parseInt(prompt("Please enter the number of the correct answer."));

    // 6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
    questions[randomQ].checkAnswer(answer);

})();

// 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).



/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/