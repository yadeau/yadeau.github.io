(function(){
	var app = angular.module("portfolio",[]);

	app.directive("contactInfo", function(){
		restrict: 'E',
		templateUrl:'contact-info.html',
	});

})();
