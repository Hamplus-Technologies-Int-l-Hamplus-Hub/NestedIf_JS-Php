var username = "Hamplus";
var username = username.charAt(0).toUpperCase() + username.substring(1, username.length);
var day = new Date(Date()).getDate();
var month = new Date(Date()).getMonth;
var year = new Date(Date()).getFullYear;
var greet;
if (month == 12) {
    if (day == 25) {
    greet ='Today is Christmas day. Hurray!!!';
    } else if (day == 26) {
    greet ='Today is Boxing day. Hurray!!!';
    }
} else if (month == 1) {
    if (day == 1) {
    greet ='Today is New Year day. Hurray!!!';
    }
} else if (month == 2) {
    if (day == 14) {
    greet ='Today is Valentine day. Hurray!!!';
    }
} else {
    greet = 'Today is not public holiday.';
}
console.log('Hello ' + (username) + " " +  greet + " Today's date is " + Date(Date()).toString());
