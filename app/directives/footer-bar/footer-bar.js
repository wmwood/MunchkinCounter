munchkinCounter.directive("footerBar", function ($window) {
	return {
		restrict: "A",
		replace: true,
		templateUrl: "app/directives/footer-bar/footer-bar.html",
		link: function (scope) {
			scope.GoToBattle = function () {
				$window.location.hash = "#/Battle";
			};
			
			scope.GoToCharacter = function () {
				$window.location.hash = "#/";
			};
		}
	}
});