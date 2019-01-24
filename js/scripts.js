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

//jQuery UI logic below
$(document).ready(function() {
  $("#mainForm").submit(function(event) {
    event.preventDefault();
  

    $("#result").show();
  });
});
