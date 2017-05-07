(function(){
	var app = angular.module("portfolio",[]);

	app.directive("contactInfo", function(){
		restrict: 'E',
		templateUrl:'views/contact-info.html'
	});

})();
