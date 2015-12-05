TODO
====

1. favicon
2. create server (?)
	-	is this necessary?
	-	examples?
3. presentation template
	- 	generator (`@kgryte/generator-reveal-presentation`)
4. 
5. ga
6. instrument to track presentation metrics
	-	state (slide number)
	-	time between events
		-	can be inferred using a delta
	-	clock time
	-	track window focus events
	-	links clicked
		-	requires intercepting event listeners
	-	keypress events
		-	intercept event listeners
	-	statistics
	-	distribution
	- 	real-time presentation statistics :)
		-	not only my presenter statistics, but number of viewers, etc.
7. should expressiveness be added to motivations?
	-	could include Python [link](http://nbviewer.jupyter.org/github/lmcinnes/hdbscan/blob/master/notebooks/Python%20vs%20Java.ipynb) abt HDBSCAN
8. add link styling (hover, coloring, etc)
9. for `wishlist`, remove bullets; add images
	-	simd
	-	operator overloading
10. switch to using [grid-layouts](https://hacks.mozilla.org/2015/09/the-future-of-layout-with-css-grid-layouts/)
	-	[polyfill](https://github.com/FremyCompany/css-grid-polyfill)
11. sign-up slide
	-	provide email input box
	-	register to receive updates and news regarding the project
12. add shortcuts to skip slides
	-	skip+1, skip+2, skip-1, skip-2, etc.
13. update project logos
	-	no white border
14. define "groups" of slides and add shortcuts to toggle their appearance
	-	e.g., allowing for a "choose your own adventure" type presentation (based on audience, etc)
15. for `server-load` slide, add Jupyter notebook architecture diagram
16. for `web technologies` slide, provide icons/images representing different features
	-	can allude to the fact that in-browser numeric computing allows new apps, like audio processing, etc.
17. for `numeric computing`
	-	advantage of being a "late" mover
	-	data structures
	-	APIs (e.g., accessor based)
	-	command-line tools
		-	be cool to show a pipe demo
	- 	demo in browser
18. for `p2p`
	-	various RPC flavors
19. bit of extra design
	-	slides with just headings...maybe a bit of color, like a solid bar about 1/3 from bottom with white text, etc.
20. add [demo](https://github.com/3dmol/3Dmol.js)
21. 


## Ideas

1. Using browser audio API to take in speech and run HMMs in browser for speech recognition
2. If I recall correctly, someone was able to use camera API to do real-time object recognition
3. 



## Other

1. move gists into separate repos
2. create module which takes an object's properties and puts them in the global scope
	-	in browser, `window`
	-	in node, local "global" context
		-	not possible; can only access `GLOBAL` variable --> obviously this will cause side-effects
		-	actually, may be able to use `eval`
	-	method "destructure"
		-	`destructure-all`
		-	`object-destructure-all`
		-	...
		-	maybe not destructure, as this has certain implications in terms of static code analysis
		-	...
		-	`methods-to-context`
			-	option for `global` versus local scope
3. update main validation repo
4. 
