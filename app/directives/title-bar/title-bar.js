munchkinCounter.directive("titleBar", function () {
	return {
		restrict: "A",
		replace: true,
		scope: {
			Title: "@titleBar"
		},
		templateUrl: "app/directives/title-bar/title-bar.html"
	}
});