$(document).ready(function() {

	var chosenLanguage;
	var inputDiv = document.getElementById("input");
	var output;

	document.getElementById("welsh").addEventListener("click", function() {
		chosenLanguage = Translate.getWelshTranslation();
	});

	document.getElementById("french").addEventListener("click", function() {
		chosenLanguage = Translate.getFrenchTranslation();
	});

	document.getElementById("vietnamese").addEventListener("click", function() {
		chosenLanguage = Translate.getVietnameseTranslation();
	});

	document.getElementById("translate").addEventListener("click", function() {
		// console.log(chosenLanguage);
		var textString = chosenLanguage;
		console.log(textString);
		output = "<p>" + textString + "</p>";
		inputDiv.innerHTML = output;
	});

});