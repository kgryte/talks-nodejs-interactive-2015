(function() {
	'use strict';

	/**
	* FUNCTION: checkClassList()
	*	Checks if browser environment supports classList.
	*
	* @returns {Boolean} boolean indicating if classList is supported
	*/
	function checkClassList() {
		return !document.body.classList;
	}

	/**
	* FUNCTION: initHighlightJS()
	*	Initialize the code highlight library once dependency is loaded.
	*
	* @returns {Void}
	*/
	function initHighlightJS() {
		hljs.initHighlightingOnLoad();
	}

	var deps = [
		{
			// Classlist polyfill:
			'src': 'js/lib/reveal/classList.js',
			'condition': checkClassList
		},
		{
			// Code syntax highlighting:
			'src': 'js/lib/reveal/plugin/highlight/highlight.js',
			'async': true,
			'callback': initHighlightJS
		},
		{
			// Zoom plugin:
			'src': 'js/lib/reveal/plugin/zoom-js/zoom.js',
			'async': true
		},
		{
			// Speaker notes:
			'src': 'js/lib/reveal/plugin/notes/notes.js',
			'async': true
		}
	];

	Reveal.initialize({
		// Presentation size (scaled based on resolution and maintains aspect ratio; can be percentage units):
		'width': 960,
		'height': 700,

		// Factor of display size that should remain empty:
		'margin': 0.1,

		// Minimum and maximum scale values to apply to content when resizing:
		'minScale': 0.2,
		'maxScale': 1.5,

		// Show the controls in the bottom right corner?
		'controls': false,

		// Show a presentation progress bar?
		'progress': false,

		// Show the page number of the current slide?
		'slideNumber': false,

		// Store slide progression in the browser history?
		'history': true,

		// Enable keyboard shortcuts for navigation?
		'keyboard': true,

		// Enable the slide overview mode?
		'overview': true,

		// Vertically center slides? If `false`, can center manually by applying a "center" class to individual slides.
		'center': false,

		// Enable touch navigation on touch devices?
		'touch': true,

		// Loop the presentation?
		'loop': false,

		// Right-to-left presentation direction?
		'rtl': false,

		// Globally turn on fragments?
		'fragments': true,

		// Is the presentation running in an embedded mode (i.e., limited screen portion)?
		'embedded': false,

		// Should a help overlay be shown when the questionmark key is pressed?
		'help': true,

		// Should speaker notes be visible to all viewers?
		'showNotes': false,

		// Number of milliseconds before proceeding to next slide (disabled when set to 0 and can be overwritten using a `data-autoslide` attribute on a slide):
		'autoSlide': 0,

		// Should auto-sliding be stopped after user input?
		'autoSlideStoppable': true,

		// Enable slide navigation via mouse wheel?
		'mouseWheel': false,

		// Hide address bar on mobile devices?
		'hideAddressBar': true,

		// Open links in an iframe preview overlay?
		'previewLinks': false,

		// Slide transition style (none, fade, slide, convex, concave, zoom):
		'transition': 'slide',

		// Slide transition speed (default, fast, slow):
		'transitionSpeed': 'default',

		// Background transition style (none, fade, slide, convex, concave, zoom):
		'backgroundTransition': 'default',

		// Number of neighboring slides in each direction relative to current slide to show in overview:
		'viewDistance': 3,

		// Parallax background image (url):
		'parallaxBackgroundImage': '',

		// Parallax background image size (css syntax: "2100px 900px"):
		'parallaxBackgroundSize': '',

		// Number of pixels to move the parallax background per slide (calculated automatically unless specified; set to 0 to disable along an axis):
		'parallaxBackgroundHorizontal': null,
		'parallaxBackgroundVertical': null,

		// Presentation dependencies:
		'dependencies': deps
	});
})();
