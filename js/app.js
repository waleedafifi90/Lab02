'use-strict';

var userScore = 0;

var userName = prompt('Please tell us your name ^_^', 'Waleed');
// console.log('The user name is', userName);
alert('The user name is ' + userName);

var Question1 = prompt('Do you like to see site owner in person? y/yes ','y').toLowerCase();
// console.log('The user has answer question 1', Question1);
while( Question1 != 'y' && Question1 != 'yes' && Question1 != 'n' && Question1 != 'no') {
    Question1 = prompt('Do you like to see site owner in person? y/yes ','y').toLowerCase();
}
alert('Your answer question 1 ' + Question1);

var Question2 = prompt('Did this site helps you to get whats you are looking for? y/yes','y').toLowerCase();
// console.log('The user has answer question 2', Question2);
while( Question2 !== 'y' && Question2 !== 'yes' && Question2 !== 'n' && Question2 !== 'no') {
    Question2 = prompt('Did this site helps you to get whats you are looking for? y/yes','y').toLowerCase();
}
alert('Your answer question 2 ' + Question2);

var Question3 = prompt('What if we gave you a coupon reduce some product price, will it be good? y/yes','y').toLowerCase();
// console.log('The user has answer question 3', Question3);
while( Question3 !== 'y' && Question3 !== 'yes' && Question3 !== 'n' && Question3 !== 'no') {
    Question3 = prompt('What if we gave you a coupon reduce some product price, will it be good? y/yes','y').toLowerCase();
}
alert('Your answer question 3 ' + Question3);

var Question4 = prompt('Some users don\'t like to buy online are you one of them? y/yes','y').toLowerCase();
// console.log('The user has answer question 4', Question4);
while( Question4 !== 'y' && Question4 !== 'yes' && Question4 !== 'n' && Question4 !== 'no') {
    Question4 = prompt('Some users don\'t like to buy online are you one of them? y/yes','y').toLowerCase();
}
alert('Your answer question 4 ' + Question4);

var Question5 = prompt('Are you a cat person? y/yes','y').toLowerCase();
// console.log('The user has answer question 5', Question5);
while( Question5 !== 'y' && Question5 !== 'yes' && Question5 !== 'n' && Question5 !== 'no' ) {
    Question5 = prompt('Are you a cat person? y/yes','y').toLowerCase();
}
alert('Your answer question 5 ' + Question5);

if (Question1 && Question2 && Question3 && Question4 && Question5) {
    userScore += 60;
}

var guessNumber = prompt('Enter a Number', '3');
if (guessNumber < 15) {
        alert("Too Low");
} else if (guessNumber > 15) {
        alert("Too High");
 } else {
    alert("Perfect you figure it out ^_^");
    userScore += 10;
}


var gussesNumberArray = ['15', '20', '33', '4'];
var Question7 = prompt('Guss a number', '3');
var n = false;
var userAttemp = 0;

for(var i = 0; i < gussesNumberArray.length; i++) {
    if( Question7 == gussesNumberArray[i]) {
        n = true;
    }
}

// for(var i = 0; i < gussesNumberArray.length; i++) {
//     if( Question7 == gussesNumberArray[i]) {
//         n = true;
//         alert("Perfect you figure it out ^_^");
//     }
// }


// var n = gussesNumberArray.includes(Question7);
// console.log(n);

if (!n) {
    while( !n && userAttemp < 6 ) {
        Question7 = prompt('Guss a number', '3');
        for(var i = 0; i < gussesNumberArray.length; i++) {
            if( Question7 == gussesNumberArray[i]) {
                n = true;
            }
        }
        userAttemp++;
        console.log(userAttemp);
        console.log('The user has enter number', Question7);
    }
 } else {
    alert("Perfect you figure it out ^_^");
    userScore += 10;
}
if (!n) { alert('Correct answer would be 15, 20, 33, 4'); } else { userScore += 10; }

console.log('User score is', userScore);
alert(userName + '\nThank for your kind and help us with survey \nYour coupon code is FGremm32 \n Your final score is '+ userScore +' \n Have a nice day');