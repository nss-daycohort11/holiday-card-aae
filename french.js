var Translate = (function(argument) {
    var french = {"merry":"joyeux", "christmas":"noël", "and":"et", "happy":"content", "new":"neuf", "year":"an"};

    argument.getFrenchTranslation = function(message) {
        return this.performTranslation(french, message);
    };

    return argument;
})(Translate || {});



