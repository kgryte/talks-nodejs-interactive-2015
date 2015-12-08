'use strict';

// MODULES //

var matrix = require( 'dstructs-matrix' );
var callbackify = require( 'callbackify' );


// TRANSFORM //

function toJSON( mat ) {
	return mat.toJSON();
}


// EXPORTS //

module.exports = callbackify( matrix, toJSON );
