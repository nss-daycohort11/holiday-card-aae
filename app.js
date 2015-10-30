$(document).ready(function() {

	var chosenLanguage;
	var inputDiv = $("#input");
	var output;

	$("#welsh").click(function() {
		var input = $("#message-input").val();
		chosenLanguage = Translate.getWelshTranslation(input);
	});

	$("#french").click(function() {
		var input = $("#message-input").val();
		chosenLanguage = Translate.getFrenchTranslation(input);
	});

	$("#vietnamese").click(function() {
		var input = $("#message-input").val();
		chosenLanguage = Translate.getVietnameseTranslation(input);
	});

	$("#translate").click(function() {
		// console.log(chosenLanguage);
		var textString = chosenLanguage;
		console.log(textString);
		output = "<p>" + textString + "</p>";
		inputDiv.html(output);
	});

});