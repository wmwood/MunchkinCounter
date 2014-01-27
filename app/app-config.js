(function () {
	"use strict";

	munchkinCounter.value("appSettings", {
		BaseUrl: "/MunchkinCounter/",
		Title: "Munchkin Counter"
	});

	munchkinCounter.config(["$routeProvider", appConfig]);

	function appConfig($routeProvider) {
		$routeProvider.when("/", {
			templateUrl: "app/views/character.html",
			controller: "characterController as vm"
		});

		$routeProvider.when("/Battle", {
			templateUrl: "app/views/battle.html",
			controller: "battleController as vm"
		});

		$routeProvider.otherwise({
			redirectTo: "/"
		});
	}
})();