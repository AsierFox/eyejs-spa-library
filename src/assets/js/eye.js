(function(window, document) {
	'use strict';
	/**
	 * Function that initialize the library.
	 */
	var init = function() {

		var element = null;
		var renderArea = null;
		var routes = {};
		var controllers = {};
		var currentController = null;

		var app = {
			/**
			 * Gets the element with the passed id.
			 * @param id The id of the element.
			 * @returns this
			 */
			getId: function(id) {
				element = document.getElementById(id);
				return this;
			},
			/**
			 * Avoid the submit event for the element.
			 * @returns this
			 */
			noSubmit: function() {
				element.addEventListener('submit', function(ev) {
					ev.preventDefault();
				}, false);
				return this;
			}
		};
		return app;
	};
	// Avoid object redefinition
	if (typeof window.app === 'undefined') {
		window.app = init();
	}

})(window, document);
