(function () {
	"use strict";

    var repositoryName = "battleRepository";

    munchkinCounter.factory(repositoryName, [battleRepository]);

    function battleRepository() {
        var localStorageKey = "MunchkinCounterBattle";

        function _getMonsterData() {
            var characterData = localStorage[localStorageKey];

            if (localStorage.getItem(localStorageKey) !== null)
                return JSON.parse(localStorage[localStorageKey]);
            else
                return {
                    Level: 1,
                    Modifier: 0
                };
        }

        function _setMonsterData(characterData) {
            localStorage[localStorageKey] = JSON.stringify(characterData);
        }

        return {
            GetMonsterData: _getMonsterData,
            SetMonsterData: _setMonsterData
        };
    }
})();