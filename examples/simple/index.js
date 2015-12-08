'use strict';

var rpc = require( 'rpc-multistream' );
var methods = require( './methods.js' );

// Create an RPC server:
var server = rpc( methods, {'debug': true} );

// Create an RPC client:
var client = rpc( methods, {'debug': true} );

// Create a stream pipeline:
client.pipe( server ).pipe( client );

// Attach a listener for when a client receives server methods:
client.on( 'methods', onMethods );

// Listener invoked once a server announces its methods:
function onMethods( methods ) {

	// Create a matrix using RPC:
	methods.matrix( [0,1,2,3,4,5,6,7,8,9], [5,2], 'int16', onMatrix );
}

// Listener invoked upon receiving a matrix from the server:
function onMatrix( err, matrix ) {
	if ( err ) {
		throw err;
	}
	console.log( matrix );
}
