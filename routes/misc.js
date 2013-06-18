exports.test = function(req, res){
	$(document).ready(function() {
		$('img').click(function() {
			$(this).fadeOut('slow');
		});
	});
};