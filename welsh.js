
var Translate = (function(argument) {
	var welsh = {"merry":"llawen", "christmas":"nadolig", "and":"ac", "happy":"hapus", "new":"newydd", "year":"blwyddyn"};


	argument.getWelshTranslation = function() {
		var input = document.getElementByID("#message-input").value;
		console.log(input);
		//split the text input into an array
		var englishArray = input.split(" ");
		console.log(englishArray);
		var welshArray = [];
		//match each word with corresponding key/value pair in welsh object
		for (var i = 0; i < englishArray.length; i++) {
			var word = englishArray[i];
			console.log("word", word);
			var welshWord = welsh[word];
			console.log("welshWord", welshWord);
			welshArray.push(welshWord);
		}
		var translation = welshArray.join(" ");
		console.log("translation", translation);
		//concat corresponding welsh value into new string
		return translation;
	};

	return argument;
})(Translate);
























