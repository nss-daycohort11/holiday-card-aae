var Translate = (function(argument) {
      var vietnamese = {"merry":"vui vẻ", "christmas":"Giáng Sinh", "and":"và", "happy":"hạnh phúc", "new":"mới", "year":"năm"};


    argument.getVietnameseTranslation = function() {
        var input = document.getElementById("message-input").value;
        console.log(input);
        //split the text input into an array
        var englishArray = input.split(" ");
        console.log(englishArray);
        var vietnameseArray = [];
        //match each word with corresponding key/value pair in welsh object
        for (var i = 0; i < englishArray.length; i++) {
            var word = englishArray[i];
            console.log("word", word);
            var vietnameseWord = vietnamese[word];
            console.log("welshWord", vietnameseWord);
            vietnameseArray.push(vietnameseWord);
        }
        var translation = vietnameseArray.join(" ");
        console.log("translation", translation);
        //concat corresponding welsh value into new string
        return translation;
    };

    return argument;
})(Translate);