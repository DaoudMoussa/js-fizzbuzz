// al posto dei multipli di 3, deve stampare "Fizz"
// al posto dei multipli di 5, deve stampare "Buzz"
// al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz"

for (var i = 0; i < 101; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if(i % 3 == 0) {
        console.log('Fizz');
    } else if(i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
