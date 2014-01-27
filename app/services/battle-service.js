(function () {
	"use strict";

	var serviceName = "battleService";

	munchkinCounter.factory(serviceName, ["battleRepository","characterService", battleService]);

	function battleService(battleRepository,characterService) {

		function _getLevel() {
			return battleRepository.GetMonsterData().Level;
		}

		function _levelUp() {
			var monsterData = battleRepository.GetMonsterData();

			monsterData.Level++;

			battleRepository.SetMonsterData(monsterData);
		}

		function _levelDown() {
			var monsterData = battleRepository.GetMonsterData();

			if (monsterData.Level > 1)
				monsterData.Level--;

			battleRepository.SetMonsterData(monsterData);
		}

		function _getModifier() {
			return battleRepository.GetMonsterData().Modifier;
		}

		function _modifierUp() {
			var monsterData = battleRepository.GetMonsterData();

			monsterData.Modifier++;

			battleRepository.SetMonsterData(monsterData);
		}

		function _modifierDown() {
			var monsterData = battleRepository.GetMonsterData();

			if (monsterData.Modifier > 0)
				monsterData.Modifier--;

			battleRepository.SetMonsterData(monsterData);
		}

		function _getPowerDifference() {
			return (characterService.GetPower()) - (_getLevel() + _getModifier());
		}

		return {
			GetLevel: _getLevel,
			LevelUp: _levelUp,
			LevelDown: _levelDown,

			GetModifier: _getModifier,
			ModifierUp: _modifierUp,
			ModifierDown: _modifierDown,

			GetPowerDifference: _getPowerDifference
		};
	}
})();