var userName = prompt('What is your name?');
var answersCorrect;
answersCorrect = 0;

var question1 = prompt("Let's play a game. I'll ask you three yes/no questions. You will try to guess the right answers... 1. Is Tulsa the capitol of Oklahoma? YES or NO");
console.log('question1 verbatim response: ' + question1);
console.log('question1 toLowerCase() response: ' + question1.toLowerCase());
if(question1.toLowerCase() === 'no' || question1.toLowerCase() === 'n'){
	alert('Good job ' + userName + '. You got the first question correct. The capital city of Oklahoma is Oklahoma City');
	answersCorrect ++
} else {
	alert('Sorry ' + userName + '. You got the first question wrong. The capital city of Oklahoma is Oklahoma City');
}

var question2 = prompt('2. Is the song "I Gotta Feeling" by the Black Eyed Peas the highest selling digital single of all time? YES or NO');
console.log('question2 verbatim response: ' + question2);
console.log('question2 toLowerCase() response: ' + question2.toLowerCase());
if(question2.toLowerCase() === 'no' || question2.toLowerCase() === 'n') {
	alert('Good job ' + userName + '. "You got the second question right". The highest selling digital single of all time is "Call Me Maybe" by Carly Rae Jespen.');
	answersCorrect ++
} else {
	alert('Sorry ' + userName + '. You got the second question wrong. The highest selling digital single of all time is "Call Me Maybe" by Carly Rae Jespen.');
}

var question3 = prompt('3. Did Russell Westbrook lead the league in scoring average per game in the 2014-2015 NBA season? YES or NO');
console.log('question3 verbatim response: ' + question3);
console.log('question3 toLowerCase response: ' + question3.toLowerCase());
if(question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y') {
	alert('Good job ' + userName + '. You got the third question right. Russell Westbrook averaged 28.1 ppg to lead the NBA in scoring last year.');
	answersCorrect ++
} else {
	alert('Sorry ' + userName + '. You got the third question wrong. Russell Westbrook averaged 28.1 ppg to lead the NBA in scoring last year.');
}

console.log('answersCorrect = ' + answersCorrect);
prompt('Thanks for playing ' + userName + '! You got ' + answersCorrect + '/3 questions correct.');
