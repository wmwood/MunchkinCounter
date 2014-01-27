(function () {
	"use strict";

	var controllerName = "characterController";

	munchkinCounter.controller(controllerName, ["$scope", "$window", "characterService", characterController]);

	function characterController($scope, $window, characterService) {
		var vm = this;

		vm.Name = "";

		vm.GetLevel = GetLevel;
		vm.GetGear = GetGear;
		vm.GetPower = GetPower;

		vm.LevelUp = LevelUp;
		vm.LevelDown = LevelDown;
		vm.GearUp = GearUp;
		vm.GearDown = GearDown;

		Initialize();

		function Initialize() {
			vm.Name = characterService.GetName();

			$scope.$watch("vm.Name", function () {
				characterService.SetName(vm.Name);
			});
		}

		function GetLevel() {
			return characterService.GetLevel();
		}

		function GetGear() {
			return characterService.GetGear();
		}

		function GetPower() {
			return characterService.GetPower();
		}

		function LevelUp() {
			characterService.LevelUp();
		}

		function LevelDown() {
			characterService.LevelDown();
		}

		function GearUp() {
			characterService.GearUp();
		}

		function GearDown() {
			characterService.GearDown();
		}

	}
})();