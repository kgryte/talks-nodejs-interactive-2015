/* global window, Reveal */

(function() {
	'use strict';

	Reveal.addEventListener( 'slidechanged', onChange );

	function onChange( evt ) {
		var el = evt.currentSlide;
		if ( el.id === 'demo-sorting' ) {
			el.querySelector( '#quicksort' ).innerHTML = '';
			el.querySelector( '#mergesort' ).innerHTML = '';
			window.quicksort();
			window.mergesort();
		}
		el = evt.previousSlide;
		if ( el.id === 'demo-sorting' ) {
			clearInterval( window.intervalID );
			clearTimeout( window.timeoutID );
			el.querySelector( '#quicksort' ).innerHTML = '';
			el.querySelector( '#mergesort' ).innerHTML = '';
		}
	}
})();
