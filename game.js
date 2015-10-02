var userName = prompt('What is your name?');
var answersCorrect;
answersCorrect = 0;

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var correct = document.getElementById('correct');

function ques1() {
	var question1 = prompt("1. Is Tulsa the capitol of Oklahoma? YES or NO");
	console.log('question1 verbatim response: ' + question1);
	console.log('question1 toLowerCase() response: ' + question1.toLowerCase());
	if (question1.toLowerCase() === 'no' || question1.toLowerCase() === 'n') {
		one.innerHTML = 'Good job ' + userName + '. You got the first question correct. The capital city of Oklahoma is Oklahoma City';
		answersCorrect ++;
	} else {
		one.innerHTML = 'Sorry ' + userName + '. You got the first question wrong. The capital city of Oklahoma is Oklahoma City';
	}
}

function ques2() {
	var question2 = prompt('2. Is the song "I Gotta Feeling" by the Black Eyed Peas the highest selling digital single of all time? YES or NO');
	console.log('question2 verbatim response: ' + question2);
	console.log('question2 toLowerCase() response: ' + question2.toLowerCase());
	if (question2.toLowerCase() === 'no' || question2.toLowerCase() === 'n') {
		two.innerHTML = 'Good job ' + userName + '. "You got the second question right". The highest selling digital single of all time is "Call Me Maybe" by Carly Rae Jespen.';
		answersCorrect ++;
	} else {
		two.innerHTML = 'Sorry ' + userName + '. You got the second question wrong. The highest selling digital single of all time is "Call Me Maybe" by Carly Rae Jespen.';
	}
}

function ques3() {
	var question3 = prompt('3. Did Russell Westbrook lead the league in scoring average per game in the 2014-2015 NBA season? YES or NO');
	console.log('question3 verbatim response: ' + question3);
	console.log('question3 toLowerCase response: ' + question3.toLowerCase());
	if (question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y') {
		three.innerHTML = 'Good job ' + userName + '. You got the third question right. Russell Westbrook averaged 28.1 ppg to lead the NBA in scoring last year.';
		answersCorrect ++;
	} else {
		three.innerHTML = 'Sorry ' + userName + '. You got the third question wrong. Russell Westbrook averaged 28.1 ppg to lead the NBA in scoring last year.';
	}
}

ques1();
ques2();
ques3();

console.log('answersCorrect = ' + answersCorrect);
correct.innerHTML = 'Thanks for playing ' + userName + '! You got ' + answersCorrect + '/3 questions correct.';
