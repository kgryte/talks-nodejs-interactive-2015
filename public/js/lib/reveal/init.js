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
			'src': 'js/lib/reveal/classList.js',
			'condition': checkClassList
		},
		{
			'src': 'js/lib/reveal/plugin/highlight/highlight.js',
			'async': true,
			'callback': initHighlightJS
		},
		{
			'src': 'js/lib/reveal/plugin/zoom-js/zoom.js',
			'async': true
		},
		{
			'src': 'js/lib/reveal/plugin/notes/notes.js',
			'async': true
		}
	];

	Reveal.initialize({
		'controls': false,
		'progress': false,
		'history': true,
		'center': true,
		'transition': 'slide',
		'dependencies': deps
	});
})();
