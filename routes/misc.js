exports.test = function(req, res){
	res.render('index', {title: 'Welcome to my Portfolio'});
	/*$(document).ready(function() {
		$('img').click(function() {
			$(this).fadeOut('slow');
		});
	});*/
};