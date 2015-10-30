
var Translate = (function(argument) {
	var welsh = {"merry":"llawen", "christmas":"nadolig", "and":"ac", "happy":"hapus", "new":"newydd", "year":"blwyddyn"};

	argument.performTranslation = function(language, message) {
		//split the text input into an array
		var englishArray = message.split(" ");
		console.log(englishArray);
		var languageArray = [];
		//match each word with corresponding key/value pair in welsh object
		for (var i = 0; i < englishArray.length; i++) {
			var word = englishArray[i];
			console.log("word", word);
			var languageWord = language[word];
			console.log("this Word", languageWord);
			languageArray.push(languageWord);
		}
		// //attempt at translation link
		// var translateLink = "http://translate.google.com/translate_tts?ie=UTF-8&q=";
		// for (var i = 0; i < languageArray.length; i++) {
		//   translateLink += languageArray[i];
		//   if (languageArray[i] === languageArray.length - 1) {
		//     break;
		//   } else {
		//     translateLink += "%20";
		//   }
		// }
		// translateLink += "&tl=cy&total=1&idx=0&textlen=23&prev=input";
		// var listenString = "<a href=" + translateLink + ">Listen to Translation</a>"

		// $("#listen").html(listenString);

		var translation = languageArray.join(" ");
		console.log("translation", translation);
		//concat corresponding welsh value into new string
		return translation;
	};

	argument.getWelshTranslation = function(message) {
		return this.performTranslation(welsh, message);
	};

	return argument;
})(Translate || {});
























