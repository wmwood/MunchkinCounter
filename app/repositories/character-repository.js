(function () {
	"use strict";

    var repositoryName = "characterRepository";

    munchkinCounter.factory(repositoryName, [characterRepository]);

    function characterRepository() {
        var localStorageCharacterKey = "MunchkinCounterCharacter";

        function _getCharacterData() {
            var characterData = localStorage[localStorageCharacterKey];

            if (localStorage.getItem(localStorageCharacterKey) !== null)
                return JSON.parse(localStorage[localStorageCharacterKey]);
            else
                return {
                    Name: "",
                    Level: 1,
                    Gear: 0
                };
        }

        function _setCharacterData(characterData) {
            localStorage[localStorageCharacterKey] = JSON.stringify(characterData);
        }

        return {
            GetCharacterData: _getCharacterData,
            SetCharacterData: _setCharacterData
        };
    }
})();