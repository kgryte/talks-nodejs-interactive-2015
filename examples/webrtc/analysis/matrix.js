'use strict';

// MODULES //

var data = require( './data.js' );


// MATRIX //

/**
* FUNCTION: matrix( methods, ctx, next )
*	Creates a matrix.
*
* @param {Object} methods - RPC methods
* @param {Object} ctx - analysis context
* @param {Function} next - callback
* @returns {Void}
*/
function matrix( methods, ctx, next ) {
	methods.matrix( data, data.dims, 'float64', onMatrix );

	function onMatrix( error, matrix ) {
		if ( error ) {
			return next( error );
		}
		ctx.mat = matrix;
		next();
	}
} // end FUNCTION matrix()


// EXPORTS //

module.exports = matrix;
