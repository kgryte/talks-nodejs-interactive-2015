Numeric Computing in JavaScript
===
> Talk for [Node.js Interactive][nodejs-interactive] (2015).


## Abstract

Traditionally, if you wanted to write fast code for numeric computation, you used Fortran or C. Within the past two decades, we have seen an enormous shift toward languages which favor expressiveness over absolute speed. Much of scientific computing is now performed using dynamic, loosely typed languages, such as R or Python. Taking into account JavaScript's expressiveness, why not do your computing in Node? In this talk, I will discuss numeric computation in JavaScript, [libraries][compute-io] currently available, and what makes these [libraries][compute-io] competitive with and even superior to alternatives on other platforms. I will discuss how to leverage Node [libraries][compute-io] when building P2P compute applications, culminating in a demo showcasing [WebRTC][webrtc] and [RPC][rpc] over a peer network. Finally, I will outline future steps and identify opportunities for community development of next-generation tools.


## Installation

``` bash
$ git clone https://github.com/kgryte/talks-nodejs-interactive-2015.git
```


## Usage

From the top-level directory,

``` bash
$ python -m SimpleHTTPServer 9000
```

and navigate to

```
http://127.0.0.1:9000/public
```

in your browser.


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[nodejs-interactive]: http://events.linuxfoundation.org/events/node-interactive
[webrtc]: http://www.webrtc.org/
[rpc]: https://en.wikipedia.org/wiki/Remote_procedure_call
[compute-io]: http://compute-io.com
