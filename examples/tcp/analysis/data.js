'use strict';

// MODULES //

var iris = require( 'datasets-iris' );


// VARIABLES //

var dims, arr;

arr = [
	iris.setosa.sepal.len,
	iris.setosa.sepal.width,
	iris.setosa.petal.len,
	iris.setosa.petal.width,
	iris.versicolor.sepal.len,
	iris.versicolor.sepal.width,
	iris.versicolor.petal.len,
	iris.versicolor.petal.width,
	iris.virginica.sepal.len,
	iris.virginica.sepal.width,
	iris.virginica.petal.len,
	iris.virginica.petal.width
];

dims = [ arr.length, arr[ 0 ].length ];

// Linearize the data into a 1-dimensional array:
arr = Array.prototype.concat.apply( [], arr );


// EXPORTS //

module.exports = arr;
module.exports.dims = dims;
