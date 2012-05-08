/*John Plank
VFW Project 2
05-05-2012
Apocalypse Checklist*/

console.log("suck it world");

var $ = function (x) {
	var theElemenent = document.getElementById(x)
	return theElement;
};

var pw    = $("password");
var cpw   = $("confirm");
var check = $("submit");


console.log("suck it more");


var checkpw = function () {
	console.log("pw checked");
	if (pw.value != "") {
		cpw.removeAttribute("disabled", "disabled");
	}
};

console.log("suck it even more");

 var comparePasswords = function () {
 	if (pw.value === cpw.value) {
 		alert("The passwords match");
 	} else {
 		alert("The passwords do not match. Please try agian. ")
 	}
 };


pw.addEventListener("blur", checkpw);
check.addEventListener("click", comparePasswords);






