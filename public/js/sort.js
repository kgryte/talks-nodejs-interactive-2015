/* global window, d3 */

(function() {
	'use strict';

	window.quicksort = quicksort;
	window.mergesort = mergesort;
	window.intervalID = null;
	window.timeoutID = null;

	// http://bl.ocks.org/mbostock/1582075
	function quicksort() {
		var margin = {top: 30, right: 30, bottom: 30, left: 30},
			width = 960 - margin.left - margin.right,
			height = 100 - margin.top - margin.bottom;

		var n = 240,
			index = d3.range(n),
			data = shuffle(index.slice());

		var x = d3.scale.ordinal().domain(index).rangePoints([0, width]),
			a = d3.scale.linear().domain([0, n - 1]).range([-Math.PI / 4, Math.PI / 4]);

		var svg = d3.select('#quicksort').append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
				.attr('transform', 'translate(' + margin.left + ',' + (margin.top + height) + ')');

		var line = svg.selectAll('line')
			.data(data)
			.enter().append('line')
			.attr('index', function(d, i) { return 'i' + i; })
			.attr('x2', function(d) { return height * Math.sin(a(d)); })
			.attr('y2', function(d) { return -height * Math.cos(a(d)); })
			.attr('transform', function(d, i) { return 'translate(' + x(i) + ')'; });

		// Fisher–Yates shuffle
		function shuffle(array) {
			var i = array.length, j, t;
			while (--i > 0) {
				j = ~~(Math.random() * (i + 1));
				t = array[j];
				array[j] = array[i];
				array[i] = t;
			}
			return array;
		}

		function sort(array) {
			var actions = [];

			function partition(left, right, pivot) {
				var v = array[pivot];
				swap(pivot, --right);
				for (var i = left; i < right; ++i) {
					if (array[i] <= v) {
						swap(i, left++);
					}
				}
				swap(left, right);
				return left;
			}

			function swap(i, j) {
				var t = array[i];
				array[i] = array[j];
				array[j] = t;
				actions.push({type: 'swap', i: i, j: j});
			}

			function recurse(left, right) {
				if (left < right) {
					var pivot = left + ~~(Math.random() * (right - left));
					actions.push({type: 'partition', pivot: pivot});
					pivot = partition(left, right, pivot);
					recurse(left, pivot);
					recurse(pivot + 1, right);
				}
			}

			recurse(0, array.length);
			return actions;
		}

		var actions = sort(data).reverse();

		window.intervalID = setInterval(function step() {
			var action = actions.pop();
			if (action) {
				switch (action.type) {
				case 'partition':
					line.style('stroke', function(d, i) {
						return i == action.pivot ? 'red' : null;
					});
					step();
					break;
				case 'swap':
					var t = line[0][action.i];
					line[0][action.i] = line[0][action.j];
					line[0][action.j] = t;
					line.attr('transform', function(d, i) {
						return 'translate(' + x(i) + ')';
					});
					break;
				}
			} else {
				clearInterval( window.intervalID );
			}
		}, 20);
	}

	// http://bl.ocks.org/mbostock/1243323
	function mergesort() {
		// Based on http://vis.stanford.edu/protovis/ex/sort.html
		// Based on work by Robert Sedgewick

		var w = 960,
			h = 50;

		var n = 240,
			x = d3.scale.linear().domain([0, n]).range([h, w - h]),
			a = d3.scale.linear().domain([0, n - 1]).range([90 + 60, 270 - 60]),
			data = d3.shuffle(d3.range(n)),
			duration = 250;

		var svg = d3.select('#mergesort').append('svg')
			.attr('width', w)
			.attr('height', h);

		var line = svg.selectAll('line')
			.data(data)
			.enter().append('line')
			.attr('x1', 0)
			.attr('y1', 0)
			.attr('x2', 0)
			.attr('y2', h)
			.attr('transform', transform);

		start();

		// Start the animation!
		function start() {
			var passes = sort(data).reverse();

			update();

			function update() {
				var pass = passes.pop();

				line.data(pass, Number)
					.transition()
					.duration(duration)
					.attr('transform', transform);

				if (passes.length) {
					window.timeoutID = setTimeout(update, duration);
				} else {
					// d3.shuffle(data);
					// setTimeout(start, duration + 4000);
				}
			}
		}

		function transform(d, i) {
			return 'translate(' + x(i) + ',' + h + ')rotate(' + a(d) + ')';
		}

		// Sorts the specified array using bottom-up mergesort, returning an array of
		// arrays representing the state of the specified array after each insertion for
		// each parallel pass. The first pass is performed at size = 2.
		function sort(array) {
			var passes = [],
				i,
				j,
				n = array.length,
				m = 1;

			// double the size each pass
			while (m < array.length) {
				i = j = 0;
				while (i < array.length) {
					j += merge(i, i += m, i += m);
				}
				if (j) {
					passes.push(array.slice());
				} else {
					m <<= 1;
				}
			}

			// Merges two adjacent sorted arrays in-place.
			function merge(start, middle, end) {
				middle = Math.min(array.length, middle);
				end = Math.min(array.length, end);
				for (; start < middle; start++) {
					if (array[start] > array[middle]) {
						var v = array[start];
						array[start] = array[middle];
						insert(middle, end, v);
						return true;
					}
				}
				return false;
			}

			// Inserts the value v into the subarray specified by start and end.
			function insert(start, end, v) {
				while (start + 1 < end && array[start + 1] < v) {
					var tmp = array[start];
					array[start] = array[start + 1];
					array[start + 1] = tmp;
					start++;
				}
				array[start] = v;
			}
			return passes;
		}
	}
})();
