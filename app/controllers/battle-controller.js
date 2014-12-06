(function () {
	"use strict";

	var controllerName = "battleController";

	munchkinCounter.controller(controllerName, ["$scope", "battleService", battleController]);

	function battleController($scope, battleService) {
		var vm = this;

		vm.Name = "";

		vm.GetLevel = GetLevel;
		vm.GetModifier = GetModifier;
		vm.GetPowerDifference = GetPowerDifference;
		vm.GetMessage = GetMessage;

		vm.LevelUp = LevelUp;
		vm.LevelDown = LevelDown;
		vm.ModifierUp = ModifierUp;
		vm.ModifierDown = ModifierDown;

		Initialize();

		function Initialize() {}

		function GetLevel() {
			return battleService.GetLevel();
		}

		function GetModifier() {
			return battleService.GetModifier();
		}

		function GetPowerDifference() {
			return battleService.GetPowerDifference();
		}

		function GetMessage() {
			var message = "";
			
			if(GetPowerDifference() >0)
				message = "You Win";
			else
				message = "You Lose";
			
			return message;
		}

		function LevelUp() {
			battleService.LevelUp();
		}

		function LevelDown() {
			battleService.LevelDown();
		}

		function ModifierUp() {
			battleService.ModifierUp();
		}

		function ModifierDown() {
			battleService.ModifierDown();
		}

	}
})();
