(function () {
	"use strict";

	var serviceName = "characterService";

	munchkinCounter.factory(serviceName, ["characterRepository", characterService]);

	function characterService(characterRepository) {

		function _getName() {
			return characterRepository.GetCharacterData().Name;
		}

		function _setName(name) {
			var characterData = characterRepository.GetCharacterData();

			characterData.Name = name;

			characterRepository.SetCharacterData(characterData);
		}


		function _getLevel() {
			return characterRepository.GetCharacterData().Level;
		}

		function _levelUp() {
			var characterData = characterRepository.GetCharacterData();

			characterData.Level++;

			characterRepository.SetCharacterData(characterData);
		}

		function _levelDown() {
			var characterData = characterRepository.GetCharacterData();

			if (characterData.Level > 1)
				characterData.Level--;

			characterRepository.SetCharacterData(characterData);
		}

		function _getGear() {
			return characterRepository.GetCharacterData().Gear;
		}

		function _gearUp() {
			var characterData = characterRepository.GetCharacterData();

			characterData.Gear++;

			characterRepository.SetCharacterData(characterData);
		}

		function _gearDown() {
			var characterData = characterRepository.GetCharacterData();

			if (characterData.Gear > 0)
				characterData.Gear--;

			characterRepository.SetCharacterData(characterData);
		}

		function _getPower() {
			return (_getLevel() + _getGear());
		}

		return {
			GetName: _getName,
			SetName: _setName,

			GetLevel: _getLevel,
			LevelUp: _levelUp,
			LevelDown: _levelDown,

			GetGear: _getGear,
			GearUp: _gearUp,
			GearDown: _gearDown,

			GetPower: _getPower
		};
	}
})();