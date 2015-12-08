'use strict';

// MODULES //

var variance = require( 'compute-variance' );
var matrix = require( 'dstructs-matrix' );
var callbackify = require( 'callbackify' );


// TRANSFORM //

function toJSON( mat ) {
	return mat.toJSON();
}


// MATRIX //

function fromJSON( json ) {
	return matrix( json.data, json.shape, json.dtype );
}


// WRAPPER //

function wrapper() {
	var args;
	var len;
	var i;

	len = arguments.length;
	args = new Array( len );
	for ( i = 0; i < len; i++ ) {
		args[ i ] = arguments[ i ];
	}
	// Over RPC, a Matrix is serialized as JSON. We need to revive the Matrix:
	args[ 0 ] = fromJSON( args[ 0 ] );

	return variance.apply( null, args );
}


// EXPORTS //

module.exports = callbackify( wrapper, toJSON );
