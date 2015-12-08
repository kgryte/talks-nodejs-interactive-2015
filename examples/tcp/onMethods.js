'use strict';

// MODULES //

var debug = require( 'debug' )( 'analysis' );
var series = require( 'series' );
var context = require( './context.js' );
var matrix = require( './analysis/matrix.js' );
var mean = require( './analysis/mean.js' );
var variance = require( './analysis/variance.js' );
var results = require( './analysis/results.js' );


// ON METHODS //

/**
* FUNCTION: onMethods( methods )
*	Callback invoked upon receiving RPC methods.
*
* @param {Object} methods - RPC methods
* @returns {Void}
*/
function onMethods( methods ) {
	// Initialize an analysis sequence:
	var analysis = series( methods, context() );

	// Add an analysis phase to create a matrix:
	analysis.phase( matrix );

	// Add an analysis phase to compute the mean:
	analysis.phase( mean );

	// Add an analysis phase to compute the variance:
	analysis.phase( variance );

	// Add an analysis phase to print results:
	analysis.phase( results );

	// Run the analysis:
	analysis( done );

	function done( error ) {
		if ( error ) {
			throw error;
		}
		debug( 'Analysis complete.' );
	}
} // end FUNCTION onMethods()


// EXPORTS //

module.exports = onMethods;
