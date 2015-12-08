'use strict';

// MODULES //

var debug = require( 'debug' )( 'webrtc:client' );
var rpc = require( 'rpc-multistream' );
var rtcc = require( 'webrtc-connect' );
var methods = require( './methods.js' );
var onMethods = require( './onMethods.js' );


// RPC CLIENT //

var opts = {
	'debug': false
};

var client = rpc( methods, opts );
client.on( 'methods', onMethods );


// WEBRTC CONNECTION //

var opts = {
	'url': 'http://127.0.0.1',
	'port': 9999
};

rtcc.connect( opts, onPeer );

function onPeer( error, peer ) {
	if ( error ) {
		throw error;
	}
	debug( 'Connection established.' );
	peer.pipe( client ).pipe( peer );
}
