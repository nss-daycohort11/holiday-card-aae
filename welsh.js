
var Translate = (function(argument) {
	var welsh = {"merry":"llawen", "christmas":"nadolig", "and":"ac", "happy":"hapus", "new":"newydd", "year":"blwyddyn"};


	argument.getWelshTranslation = function() {
		var input = $("#message-input").val();
		return welsh;
	};

	return argument;
})(Translate);
























