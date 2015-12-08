'use strict';

// MODULES //

var debug = require( 'debug' )( 'results' );
var matrix = require( 'dstructs-matrix' );


// FROM JSON //

function fromJSON( json ) {
	return matrix( json.data, json.shape, json.dtype );
}


// RESULTS //

/**
* FUNCTION: results( methods, ctx, next )
*	Prints analysis results.
*
* @param {Object} methods - RPC methods
* @param {Object} ctx - analysis context
* @param {Function} next - callback
* @returns {Void}
*/
function results( methods, ctx, next ) {
	var mu = fromJSON( ctx.mu );
	var s2 = fromJSON( ctx.s2 );

	debug( 'Mean sepal lengths: %s', mu.sget( '0::4,:' ).toString() );
	debug( 'Variance in sepal lengths: %s', s2.sget( '0::4,:' ).toString() );

	debug( 'Mean sepal widths: %s', mu.sget( '1::4,:' ).toString() );
	debug( 'Variance in sepal widths: %s', s2.sget( '1::4,:' ).toString() );

	debug( 'Mean petal lengths: %s', mu.sget( '2::4,:' ).toString() );
	debug( 'Variance in petal lengths: %s', s2.sget( '2::4,:' ).toString() );

	debug( 'Mean petal widths: %s', mu.sget( '3::4,:' ).toString() );
	debug( 'Variance in petal widths: %s', s2.sget( '3::4,:' ).toString() );

	next();
} // end FUNCTION results()


// EXPORTS //

module.exports = results;
