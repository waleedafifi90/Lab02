'use-strict';

var userScore = 0;

var userName = prompt('Please tell us your name ^_^', 'Waleed');
// console.log('The user name is', userName);
alert('Welcome ' + userName);

var Question1 = prompt('Do you like to see site owner in person? y/yes ','y').toLowerCase();
// console.log('The user has answer question 1', Question1);
while( Question1 != 'y' && Question1 != 'yes' && Question1 != 'n' && Question1 != 'no') {
    Question1 = prompt('Do you like to see site owner in person? y/yes ','y').toLowerCase();
}
if ( Question1 === 'y' || Question1 === 'yes' ) {
    alert('Thank you me neither I would like to see you too in-person');
} else {
    alert('Me too I don\'t want to see you at all -_- ');
}
userScore += 10;

var Question2 = prompt('Do you think that am a Cat person? y/yes','y').toLowerCase();
// console.log('The user has answer question 2', Question2);
while( Question2 !== 'y' && Question2 !== 'yes' && Question2 !== 'n' && Question2 !== 'no') {
    Question2 = prompt('Do you think that am a Cat person? y/yes','y').toLowerCase();
}
userScore += 10;

if ( Question2 === 'y' || Question2 === 'yes' ) {
    alert('Indeed I am sometimes I believe that I am a Cat ^_^');
} else {
    alert('Come on why do you think I made a Cat website?');
}
userScore += 10;

var Question3 = prompt('Do you think that my cat can eat anything? y/yes','y').toLowerCase();
// console.log('The user has answer question 3', Question3);
while( Question3 !== 'y' && Question3 !== 'yes' && Question3 !== 'n' && Question3 !== 'no') {
    Question3 = prompt('Do you think that my cat can eat anything? y/yes','y').toLowerCase();
}
if ( Question3 === 'y' || Question3 === 'yes' ) {
    alert('Sure she is! Meo');
} else {
    alert('Really she is sometime she eat my Cactus plant -.-');
}
userScore += 10;

var Question4 = prompt('Do you believe that I drink more than 5 cups of tea every day? y/yes','y').toLowerCase();
// console.log('The user has answer question 4', Question4);
while( Question4 !== 'y' && Question4 !== 'yes' && Question4 !== 'n' && Question4 !== 'no') {
    Question4 = prompt('Do you believe that I drink more than 5 cups of tea every day? y/yes','y').toLowerCase();
}
if ( Question4 === 'y' || Question4 === 'yes' ) {
    alert('Sure I am ^_*');
} else {
    alert('I do drink that much tea, I drink it more than the water');
}
userScore += 10;

var Question5 = prompt('Do you need to know what plant I love the most? y/yes','y').toLowerCase();
// console.log('The user has answer question 5', Question5);
while( Question5 !== 'y' && Question5 !== 'yes' && Question5 !== 'n' && Question5 !== 'no' ) {
    Question5 = prompt('Do you need to know what plant I love the most? y/yes','y').toLowerCase();
}
if ( Question5 === 'y' || Question5 === 'yes' ) {
    alert('I really love Cactus, I owned more than 30 types of it');
} else {
    alert('OK. As you like');
}
userScore += 10;


var randomNumber = Math.round(Math.random() * 100);
var guessesAttempts = 0;
console.log(randomNumber);
var guessNumber = prompt('Enter a Number', '3');

do {
    switch (true) {
        case guessNumber < randomNumber:
            alert("Too Low");
            guessesAttempts++; 
            guessNumber = prompt('Enter a Number', '3');
            break;
        case guessNumber > randomNumber:
            alert("Too High");
            guessesAttempts++;  
            guessNumber = prompt('Enter a Number', '3');
        break;
        default:  
            break;
    }
} while (guessNumber != randomNumber && guessesAttempts < 3);
if (guessNumber == randomNumber) {
            alert("Perfect you figure it out ^_^");
            userScore += 10; 
}

// var array = ['Do you like to see site owner in person?','How do you do?'];

// function aksQuestion(question) {
//     var userInput = prompt(question);
//     return userInput;
// }

// for(var i = 0; i < array.length; i++) {
//     aksQuestion(array[i]);
// }

// if (guessNumber < randomNumber) {
//     alert("Too Low");
//     while( guessNumber < randomNumber && guessNumber < 3) {
//         guessNumber = prompt('Enter a Number', '3');
//         if (guessNumber != randomNumber) {
//             alert("Too Low");
//             guessesAttempts++;    
//         } else {
//             alert("Perfect you figure it out ^_^");
//             userScore += 10;        
//         }
//     }
// } else if (guessNumber > randomNumber) {
//     alert("Too High");
//     while( guessNumber > randomNumber && guessNumber < 3) {
//         guessNumber = prompt('Enter a Number', '3');
//         if (guessNumber != randomNumber) {
//             alert("Too High");
//             guessesAttempts++;    
//         } else {
//             alert("Perfect you figure it out ^_^");
//             userScore += 10;        
//         }
//     }
//  } else {
//     alert("Perfect you figure it out ^_^");
//     userScore += 10;
// }


var gussesNumberArray = ['cactus', 'cat', 'plumeria', 'fish'];
var Question7 = prompt('Guss what do I like!!', 'cat').toLowerCase();
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
        Question7 = prompt('Guss what do I like!!', 'cat').toLowerCase();
        for(var i = 0; i < gussesNumberArray.length; i++) {
            if( Question7 == gussesNumberArray[i]) {
                n = true;
            }
        }
        userAttemp++;
        console.log(userAttemp);
        console.log('The user has enter', Question7);
    }
 }
if (!n) { alert('Correct answer would be cactus, cat, plumeria, fish'); } else { alert("Perfect you figure it out ^_^"); userScore += 10; }

console.log('User score is', userScore);
alert(userName + '\nThank for your kind and help us with survey \nYour coupon code is FGremm32 \n Your final score is '+ userScore +' \n Have a nice day');
 function typeYouName (anything){
     alert(anything)
     
 }
 typeYouName('rania');