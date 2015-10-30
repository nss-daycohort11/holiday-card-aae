var Translate = (function(argument) {
    var vietnamese = {"merry":"vui vẻ", "christmas":"Giáng Sinh", "and":"và", "happy":"hạnh phúc", "new":"mới", "year":"năm"};


    argument.getVietnameseTranslation = function(message) {
        return this.performTranslation(vietnamese, message);
    };

    return argument;
})(Translate || {});