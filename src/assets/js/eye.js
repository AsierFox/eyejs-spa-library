(function(window, document) {
	'use strict';
	/**
	 * Function that initialize the library.
	 * @returns the app object
	 */
	var init = function() {
		var homeHash = '#/';
		/**
		 * The elements / views that are going to be
		 * loaded.
		 */
		var element = null;
		/**
		 * On the render area we are going to load
		 * the elements.
		 */
		var renderArea = null;
		var routes = {};
		var controllers = {};
		var currentController = null;

		var app = {
			/**
			 * Gets the element with the passed id.
			 * @param id The id of the element
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
			},
			/**
			 * Connects the view element to the render frame.
			 * @returns this
			 */
			link: function() {
				renderArea = element;
				return this;
			},
			/**
			 * Adds to the controller to controllers.
			 * @param name Controller name
			 * @param controller The controller object
			 * @returns this
			 */
			addController: function(name, controller) {
				controllers[name] = {
					controller: controller
				};
			},
			/**
			 * Adds to the routes a new route object with the
			 * attributes passed by parameter, like tha route
			 * path, template, controller and the loadfunc.
			 * @param route Route name / path
			 * @param template Template for the view
			 * @param controller Controller name
			 * @param loadfunc The function that is going to be executed
			 * @returns this
			 */
			route: function(route, template, controller, loadfunc) {
				routes[route] =  {
					template: template,
					controller: controller,
					load: loadfunc
				};
				return this;
			},
			/**
			 * Function that is going to run, when hashchange event
			 * is fired.
			 * @returns this
			 */
			routeHandler: function() {
				// Get the hash without the '#' char, if there is nothing take default
				var hash = window.location.hash.substring(1) || homeHash.substring(1);
				var target = routes[hash];
				var xhr = new XMLHttpRequest();

				if (target && target.template) {
					if (target.controller) {
						currentController = target.controller;
					}

					// Render the template to the render area using ajax
					xhr.addEventListener('load', function() {
						renderArea.innerHTML = this.responseText;
					}, false);
					xhr.open('GET', target.template, true);
					xhr.send();
				}
				else {
					window.location.hash = homeHash;
				}

				return this;
			}
		};
		return app;
	};
	// Avoid object redefinition
	if (typeof window.app === 'undefined') {
		window.app = init();
		// The hashchange event only is listened when the page is
		// completely loaded. That is why we add the route handler
		// also to the load event.
		window.addEventListener('load', app.routeHandler, false);
		window.addEventListener('hashchange', app.routeHandler, false);
	}

})(window, document);
