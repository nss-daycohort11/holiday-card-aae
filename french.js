var Translate = (function(argument) {
    var french = {"merry":"joyeux", "christmas":"noël", "and":"et", "happy":"content", "new":"neuf", "year":"an"};

    argument.getFrenchTranslation = function() {
        var input = $("#message-input").val();
        
        //split the text input into an array
        var englishArray = input.split(" ");
        console.log(englishArray);
        var frenchArray = [];
        //match each word with corresponding key/value pair in welsh object
        for (var i = 0; i < englishArray.length; i++) {
            var word = englishArray[i];
            console.log("word", word);
            var frenchWord = french[word];
            console.log("frenchWord", frenchWord);
            frenchArray.push(frenchWord);
        }
        //attempt at translation link
        var translateLink = "http://translate.google.com/translate_tts?ie=UTF-8&q=";
        for (var i = 0; i < frenchArray.length; i++) {
          translateLink += frenchArray[i];
          if (frenchArray[i] === frenchArray.length - 1) {
            break;
          } else {
            translateLink += "%20";
          }
        }
        translateLink += "&tl=fr&total=1&idx=0&textlen=23&prev=input";
        var listenString = "<a href=" + translateLink + ">Listen to Translation</a>"

        $("#listen").html(listenString);

        var translation = frenchArray.join(" ");
        console.log("translation", translation);
        //concat corresponding welsh value into new string
        return translation;
    };

    return argument;
})(Translate);



