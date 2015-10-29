$(document).ready(function() {

	var chosenLanguage;
	var inputDiv = $("#input");
	var output;

	$("#welsh").click(function() {
		chosenLanguage = Translate.getWelshTranslation();
	});

	$("#french").click(function() {
		chosenLanguage = Translate.getFrenchTranslation();
	});

	$("#vietnamese").click(function() {
		chosenLanguage = Translate.getVietnameseTranslation();
	});

	$("#translate").click(function() {
		// console.log(chosenLanguage);
		var textString = chosenLanguage;
		console.log(textString);
		output = "<p>" + textString + "</p>";
		inputDiv.html(output);
	});

});