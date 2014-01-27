(function () {
	"use strict";

	var controllerName = "mainController";

	munchkinCounter.controller(controllerName, ["$scope", "appSettings", mainController]);

	function mainController($scope, appSettings) {
		var vm = this;

		vm.Title = appSettings.Title;
	}
})();