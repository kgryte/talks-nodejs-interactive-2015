'use strict';

// MODULES //

var debug = require( 'debug' )( 'webrtc:server' );
var rpc = require( 'rpc-multistream' );
var rtcc = require( 'webrtc-connect' );
var methods = require( './methods.js' );
var onMethods = require( './onMethods.js' );


// RPC SERVER //

var opts = {
	'debug': false
};

var server = rpc( methods, opts );
server.on( 'methods', onMethods );


// WEBRTC SERVER //

var port = 9999;
var host = '127.0.0.1';

rtcc.createServer( onPeer ).listen( port, host );

function onPeer( error, peer ) {
	if ( error ) {
		throw error;
	}
	debug( 'Peer connected.' );
	peer.pipe( server ).pipe( peer );
}
