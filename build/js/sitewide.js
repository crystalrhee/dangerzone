var SITE = {

	init: function(){
		
	},
	
	functions: {
		scroll_to: function(scroll_place) {
			var target = $('#' + scroll_place);
			$('html, body').animate({
				scrollTop: target.offset().top - 150
			}, 1000);
		},
		
		get_params: function(param) {
			var query = window.location.search.substring(1);
			var vars = query.split('&');
			for (var i = 0; i < vars.length; i++) {
				var pair = vars[i].split('=');
				if (decodeURIComponent(pair[0]) == param) {
					return decodeURIComponent(pair[1]);
				}
			}
		}
	}
	
};


//Document.ready function below, when ready call the init() function
$(window).on('load', function() {
	SITE.init();
});