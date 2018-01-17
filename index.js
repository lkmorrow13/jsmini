//Problem 1
function math(n,m) {
	var sum = n + m;
	console.log(sum);
}math(2,9)

function add(b,r){
	var sum = b + r;
	console.log(sum)
}add('like ', 'you')

//Problem 2

var carArray = [['Vanquish','Valkyrie','DB9'],['325i','X5','3 Series'],['Flying Spur','Mulsanne','Bentayga']];
for (var i = 0; i < carArray.length; i++) {
	if (i === 0) {
		console.log('Aston Martin');
	} else if (i === 1) {
		console.log('BMW')
	} else if (i === 2) {
		console.log('Bentley')
	}
	for (var j = 0; j < carArray[i].length; j++) {
		console.log(carArray[i][j])
	}
}

//Problem 3

var num = prompt('What is your favorite number?');
if(parseInt(num) < 100){
	alert('Less than 100');
}else{
	alert('You put in ' + (num) + ' which is more than 100');
}

//Problem 4

function showname(name){
	alert(name);
}
var name = prompt('what is your name?');
showname(name)

//Problem 5

function consoletag(){
	console.log('I am a great function');
}
consoletag();

//Problem 6

var door = prompt('Choose a door! 1, 2, or 3');
if(parseInt(door) === 1){
	alert('You have won a goat!!!');
}else if(parseInt(door) === 2){
	alert('You have won a new Jeep!!!');
}else if(parseInt(door) === 3){
	alert('You have won this amazing giant can of worms!!!!');
}