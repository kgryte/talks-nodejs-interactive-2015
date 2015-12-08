'use strict';

// MODULES //

var exportDir = require( 'export-dir-files' );
var path = require( 'path' );


// METHODS //

var methods = exportDir( path.join( __dirname, 'methods' ) );


// EXPORTS //

module.exports = methods;
