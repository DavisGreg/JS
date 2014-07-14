// Hello World
// Author: Gregory Davis
// Created For: SDI Online
// Introductory look into JavaScript using the Firebug Console


var say = function (message) {console.log(message); };

// F = ((9 /5) * C) + 32
var farFromCel = function (celcius) {return ((9 / 5) * celcius) + 32; };

say("22C = " + farFromCel(22) + "F");

// C = (F - 32) * (5 / 9)
var celFromFar = function (farenheit) {return (farenheit - 32) * (5 / 9); };

say("71.6F = " + celFromFar(71.6) + "C");

var isLeapYear = function (year) {
	// by 4 - true
	// by 100 - false
	// by 400 - true
	var isDivisibleBy = function (numerator, denominator) {
		var fraction = numerator/denominator;
		return (fraction === Math.floor(fraction));
	};
	if (isDivisibleBy(year, 400) {return true; }
	else if (isDivisibleBy(year, 100) {return false; }
	else if (isDivisibleBy(year, 4) {return true; }
	else {return false; }
};

say ("2000 is a leap year: " + isLeapYear(2000)); // true
say ("1900 is a leap year: " + isLeapYear(1900)); // false
say ("2008 is a leap year: " + isLeapYear(2008)); // true
say ("2011 is a leap year: " + isLeapYear(2011)); // false
