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
        var translation = frenchArray.join(" ");
        console.log("translation", translation);
        //concat corresponding welsh value into new string
        return translation;
    };

    return argument;
})(Translate);



