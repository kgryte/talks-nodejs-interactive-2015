'use strict';

// VARIANCE //

/**
* FUNCTION: variance( methods, ctx, next )
*	Computes the variance.
*
* @param {Object} methods - RPC methods
* @param {Object} ctx - analysis context
* @param {Function} next - callback
* @returns {Void}
*/
function variance( methods, ctx, next ) {
	var opts;

	opts = {
		'dim': 2
	};

	methods.variance( ctx.mat, opts, onVariance );

	function onVariance( error, s2 ) {
		if ( error ) {
			return next( error );
		}
		ctx.s2 = s2;
		next();
	}
} // end FUNCTION variance()


// EXPORTS //

module.exports = variance;
