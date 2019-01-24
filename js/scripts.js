//
// //Code v1
//   // var leapYear = function(year) {
//   //   if (year % 4 === 0) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   // };
//
// //Code v2
//   //var leapYear = function(year) {
//   //   if (year % 100 === 0) {
//   //     return false;
//   //   } else if (year % 4 === 0) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//
// //Code refactored
// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };
//Business Logic:
var vowels = 'aeiouy';//['a', 'e', 'i', 'o', 'u'];
var letters = /^[A-Za-z]+$/;

var toPig = function(oneWord){

  if (oneWord.trim() === ''){
    return '';
  }

  if (!(oneWord.trim().match(letters))){
    return oneWord;
  }

  var result = "";
  var firstVowelIndex = -1;
  var wordLength = oneWord.length;
  var vowelIndex = -1;
  var lastIsVowel;
  var middlePart = '';
  var word = oneWord.toLowerCase();
  var wordToCheckFirstVowel = word;

  if (word[0] ==='y'){
    wordToCheckFirstVowel = word.slice(1);
  }

  for(i = 0; i < vowels.length; i++){
    vowelIndex = wordToCheckFirstVowel.indexOf(vowels[i]);
    if ((vowelIndex >= 0) && ((firstVowelIndex > vowelIndex) || (firstVowelIndex === -1))){
      firstVowelIndex = vowelIndex;
    }
  }

  if (word[0] ==='y'){
    firstVowelIndex++;
  }

  if ((word.indexOf('u') === firstVowelIndex) && (word.indexOf('q') === firstVowelIndex - 1)){
    firstVowelIndex++;
  }

  lastIsVowel = vowels.slice(0, 4).includes(word[wordLength - 1]);

  if (firstVowelIndex === 0){
    if (lastIsVowel){
      middlePart = 'w';
    }
  }
  else {
    middlePart =  oneWord.slice(0, firstVowelIndex);
  }

console.log(middlePart);
console.log(firstVowelIndex);


  result = oneWord.slice(firstVowelIndex) + middlePart + 'ay';

  return result;
};

//jQuery UI logic below
$(document).ready(function() {
  $("#mainForm").submit(function(event) {
    event.preventDefault();


    var inputText = $("#sentence").val();
    var result = [];
    console.log(inputText);

    var words = inputText.split(' ');
    for(wordIndex = 0; wordIndex < words.length; wordIndex++){
      result.push(toPig(words[wordIndex]));
    }

    $(".inputResult").text(result.join(' '));
    $("#result").show();
  });
});
