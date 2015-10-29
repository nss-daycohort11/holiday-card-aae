var Translate = (function(argument) {
    var french = {"merry":"joyeux", "christmas":"noël", "and":"et", "happy":"content", "new":"neuf", "year":"an"};


    argument.getFrenchTranslation = function() {
        var input = $("#message-input").val();
        return french;
    };

    return argument;
})(Translate);