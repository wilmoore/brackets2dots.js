# brackets2dots.js [![Build Status](https://travis-ci.org/wilmoore/brackets2dots.js.png?branch=master)](https://travis-ci.org/wilmoore/brackets2dots.js) [![Build Status](https://david-dm.org/wilmoore/brackets2dots.js.png)](https://david-dm.org/wilmoore/brackets2dots.js) [![NPM version](https://badge.fury.io/js/brackets2dots.js.png)](http://badge.fury.io/js/brackets2dots.js)

  Convert string with bracket notation to dot property notation for [Node.js][] and the browser.

## Example

    brackets2dots('group[0].section.a.seat[3]')
    //=> 'group.0.section.a.seat.3'

## Installation

[component](http://component.io/wilmoore/brackets2dots.js)

    $ component install wilmoore/brackets2dots.js

[bower](http://sindresorhus.com/bower-components/)

    $ bower install brackets2dots.js

[npm](https://npmjs.org/package/brackets2dots.js)

[![NPM](https://nodei.co/npm/brackets2dots.js.png?downloads=true)](https://nodei.co/npm/brackets2dots.js/)

[jam](http://jamjs.org/packages/#/details/brackets2dots.js)

    $ jam install brackets2dots.js

[volo](http://volojs.org)

    $ volo add wilmoore/brackets2dots.js

[global][]

    <script src="https://raw.github.com/wilmoore/brackets2dots.js/master/brackets2dots.js"></script>

## Inspiration

- [selectn][]

## License

  MIT

[selectn]:  https://github.com/wilmoore/selectn
[global]:   https://raw.github.com/wilmoore/brackets2dots.js/master/brackets2dots.min.js
[Node.js]:  http://nodejs.org
