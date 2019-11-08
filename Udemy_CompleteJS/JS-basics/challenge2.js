/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var teamJohn, teamMike, averageJohn, averageMike, winnerJohn, winnerMike, draw;
teamJohn = 89 + 120 + 103;
// teamMike = 116 + 94 + 123;
teamMike = 89 + 120 + 103;
averageJohn = teamJohn / 3;
averageMike = teamMike / 3;

var teamMary, averageMary, winnerMary;
teamMary = 97 + 134 + 105;
averageMary = teamMary / 3;

winnerJohn = averageJohn > averageMike && averageJohn > averageMary;
winnerMike = averageMike > averageJohn && averageMike > averageMary;
winnerMary = averageMary > averageJohn && averageMary > averageMike
draw = averageJohn === averageMike && averageJohn === averageMary && averageMike === averageMary;

console.log('Team John has an average score of ' + averageJohn);
console.log('Team Mike has an average score of ' + averageMike);
console.log('Team Mary has an average score of ' + averageMary);

console.log('Team John has the highest average winning score. ' + winnerJohn);
console.log('Team Mike has the highest average winning score. ' + winnerMike);
console.log('Team Mary has the highest average winning score. ' + winnerMary);
console.log('It\'s a draw. ' + draw);