var userName = prompt('What is your name?');
var answersCorrect;
answersCorrect = 0;

var one_green = document.getElementById('one_green');
var one_red = document.getElementById('one_red');
var two_green = document.getElementById('two_green');
var two_red = document.getElementById('two_red');
var three_green = document.getElementById('three_green');
var three_red = document.getElementById('three_red');
var correct = document.getElementById('correct');
var pic1 = document.getElementById('pic1');
var pic2 = document.getElementById('pic2');
var pic3 = document.getElementById('pic3');

var questions = ['1. Is Tulsa the capitol of Oklahoma? YES or NO', '2. Is the song "I Gotta Feeling" by the Black Eyed Peas the highest selling digital single of all time? YES or NO', '3. Did Russell Westbrook lead the league in scoring average per game in the 2014-2015 NBA season? YES or NO'];

var answers = ['yes', 'y', 'no', 'n'];

function ques1() {
	var question1 = prompt(questions[0]);
	console.log('question1 verbatim response: ' + question1);
	console.log('question1 toLowerCase() response: ' + question1.toLowerCase());
	if (question1.toLowerCase() === answers[2] || question1.toLowerCase() === answers[3]) {
		one_green.innerHTML = 'Good job ' + userName + '. You got the first question correct. The capital city of Oklahoma is Oklahoma City';
		pic1.innerHTML = '<img width="200" src="img/cool-dog.jpg" />';
		answersCorrect ++;
	} else {
		one_red.innerHTML = 'Sorry ' + userName + '. You got the first question wrong. The capital city of Oklahoma is Oklahoma City';
	}
}

function ques2() {
	var question2 = prompt(questions[1]);
	console.log('question2 verbatim response: ' + question2);
	console.log('question2 toLowerCase() response: ' + question2.toLowerCase());
	if (question2.toLowerCase() === answers[2] || question2.toLowerCase() === answers[3]) {
		two_green.innerHTML = 'Good job ' + userName + '. "You got the second question right". The highest selling digital single of all time is "Call Me Maybe" by Carly Rae Jespen.';
		pic2.innerHTML = '<img width="200" src="img/cool-dog.jpg" />';
		answersCorrect ++;
	} else {
		two_red.innerHTML = 'Sorry ' + userName + '. You got the second question wrong. The highest selling digital single of all time is "Call Me Maybe" by Carly Rae Jespen.';
	}
}

function ques3() {
	var question3 = prompt(questions[2]);
	console.log('question3 verbatim response: ' + question3);
	console.log('question3 toLowerCase response: ' + question3.toLowerCase());
	if (question3.toLowerCase() === answers[0] || question3.toLowerCase() === answers[1]) {
		three_green.innerHTML = 'Good job ' + userName + '. You got the third question right. Russell Westbrook averaged 28.1 ppg to lead the NBA in scoring last year.';
		pic3.innerHTML = '<img width="200" src="img/cool-dog.jpg" />';
		answersCorrect ++;
	} else {
		three_red.innerHTML = 'Sorry ' + userName + '. You got the third question wrong. Russell Westbrook averaged 28.1 ppg to lead the NBA in scoring last year.';
	}
}

ques1();
window.setTimeout(ques2, 1000);
window.setTimeout(ques3, 1000);

console.log('answersCorrect = ' + answersCorrect);
correct.innerHTML = 'Thanks for playing ' + userName + '! You got ' + answersCorrect + '/3 questions correct.';
