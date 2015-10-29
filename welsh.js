
var Translate = (function(argument) {
	var welsh = {"merry":"llawen", "christmas":"nadolig", "and":"ac", "happy":"hapus", "new":"newydd", "year":"blwyddyn"};


	argument.getWelshTranslation = function() {
		var input = $("#message-input").val();
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
		//attempt at translation link
		var translateLink = "http://translate.google.com/translate_tts?ie=UTF-8&q=";
		for (var i = 0; i < welshArray.length; i++) {
		  translateLink += welshArray[i];
		  if (welshArray[i] === welshArray.length - 1) {
		    break;
		  } else {
		    translateLink += "%20";
		  }
		}
		translateLink += "&tl=cy&total=1&idx=0&textlen=23&prev=input";
		var listenString = "<a href=" + translateLink + ">Listen to Translation</a>"

		$("#listen").html(listenString);

		var translation = welshArray.join(" ");
		console.log("translation", translation);
		//concat corresponding welsh value into new string
		return translation;
	};

	return argument;
})(Translate);
























