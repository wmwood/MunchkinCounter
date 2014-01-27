(function () {
	'use strict';

	var filterName = 'positiveNegative';

	munchkinCounter.filter(filterName, positiveNegative);

	function positiveNegative() {
		return function (number) {
			return ((number > 0) ? "+" : "") + number;
		}
	}
})();