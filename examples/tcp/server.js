'use strict';

// MODULES //

var debug = require( 'debug' )( 'tcp:server' );
var rpc = require( 'rpc-multistream' );
var net = require( 'net' );
var methods = require( './methods.js' );
var onMethods = require( './onMethods.js' );


// RPC SERVER //

var opts = {
	'debug': false
};

var server = rpc( methods, opts );
server.on( 'methods', onMethods );


// TCP SERVER //

function onConnection( connection ) {
	debug( 'Server received a new connection.' );
	connection.pipe( server ).pipe( connection );
}

var port = 4242;

net.createServer( onConnection ).listen( port );
