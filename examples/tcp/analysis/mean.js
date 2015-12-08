'use strict';

// MEAN //

/**
* FUNCTION: mean( methods, ctx, next )
*	Computes the mean.
*
* @param {Object} methods - RPC methods
* @param {Object} ctx - analysis context
* @param {Function} next - callback
* @returns {Void}
*/
function mean( methods, ctx, next ) {
	var opts;

	opts = {
		'dim': 2
	};

	methods.mean( ctx.mat, opts, onMean );

	function onMean( error, mu ) {
		if ( error ) {
			return next( error );
		}
		ctx.mu = mu;
		next();
	}
} // end FUNCTION mean()


// EXPORTS //

module.exports = mean;
