// 1
/* let Hello = () => console.log("Hello World !");

Hello(); */

// 2
/* let Square = (num) => console.log(num*num);

Square(3); */

// 3
/* let ArrSum = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        result += arr[i];
    }
    console.log(result);
}

ArrSum([1, 2, 3]); */

// 4
/* let isEven = (num) => num % 2 === 0 ? true : false;

console.log(isEven(8));
console.log(isEven(15)); */

// 5
/* let HigherNumber = (arr) => {
    let higher = 0;
    for (let number of arr){
        if (higher < number){
            higher = number;
        }
    }
    return higher
}

console.log(HigherNumber([1, 3, 8, 5, 11, 9, 7])); */

// 6
/* let Palindrome = (str) => {
    str = str.toLowerCase();
    console.log(str);
    let arrayTest = str.split("");
    let arrayToCompare = [];
    for (let i = 0; i < arrayTest.length; i++){
        arrayToCompare[i] = arrayTest[arrayTest.length - 1 - i];
    }
    let strToCompare = arrayToCompare.join('');
    console.log(strToCompare);
    console.log(str == strToCompare ? true : false);
}

Palindrome('Hello');
Palindrome('radar'); */

// 7
/* let MoreThanFive = (arrOfStr) => {
    let resultArr = [];
    for (let word of arrOfStr){
        if (word.length >= 5){
            resultArr.push(word);
        }
    }
    console.log(resultArr);
}

MoreThanFive(['one', 'two', 'seventeen', 'twenty']); // 2 words
MoreThanFive(['perfect', 'dog', 'friend', 'thanks']); // 3 words */

// 8
/* let IsPrime = (num) => {
  if (num === 1) {
    console.log("1 is not a prime number");
  } else if (num > 1) {
    for (let i = 2; i < num - 1; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
};

console.log(IsPrime(1));
console.log(IsPrime(11));
console.log(IsPrime(25)); */

// 9
/* let EvenNumbers = (arrOfNum) => {
    let resultArr = [];
    for (let number of arrOfNum){
        if (number % 2 === 0){
            resultArr.push(number);
        }
    }
    console.log(resultArr);
}

EvenNumbers([3, 5, 7, 9, 10]); // 1 number
EvenNumbers([2, 4, 6, 9, 11]) // 3 numbers */

// 10
let ReverseStr = (str) => {
    let reversedStr = '';
    for (let i = 0; i < str.length; i++){
        reversedStr += str[str.length - 1 - i];
    }
    console.log(str);
    console.log(reversedStr);
}

ReverseStr('hello');
