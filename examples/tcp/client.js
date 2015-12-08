'use strict';

// MODULES //

var debug = require( 'debug' )( 'tcp:client' );
var rpc = require( 'rpc-multistream' );
var net = require( 'net' );
var methods = require( './methods.js' );
var onMethods = require( './onMethods.js' );


// RPC CLIENT //

var opts = {
	'debug': false
};

var client = rpc( methods, opts );
client.on( 'methods', onMethods );


// TCP CONNECTION //

var opts = {
	'port': 4242
};

var connection = net.connect( opts, onConnect );

function onConnect() {
	debug( 'Client connected.' );
	connection.pipe( client ).pipe( connection );
}
