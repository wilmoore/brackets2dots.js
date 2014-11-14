# greater-than.js

[![Build Status](http://img.shields.io/travis/wilmoore/greater-than.js.svg)](https://travis-ci.org/wilmoore/greater-than.js) [![NPM version](http://img.shields.io/npm/v/greater-than.svg)](https://www.npmjs.org/package/greater-than) [![NPM downloads](http://img.shields.io/npm/dm/greater-than.svg)](https://www.npmjs.org/package/greater-than) [![LICENSE](http://img.shields.io/npm/l/greater-than.svg)](license)

> Convert string with bracket notation to dot property notation for [Node.js][] and the browser.

## Example

    var greater-than = require('greater-than');

    greater-than('group[0].section.a.seat[3]')
    //=> 'group.0.section.a.seat.3'

## Installation

[component](http://component.io/wilmoore/greater-than)

    $ component install wilmoore/greater-than

[bower](http://sindresorhus.com/bower-components/)

    $ bower install greater-than.js

[npm](https://npmjs.org/package/greater-than)

[![NPM](https://nodei.co/npm/greater-than.png?downloads=true)](https://nodei.co/npm/greater-than/)

[volo](http://volojs.org)

    $ volo add wilmoore/greater-than.js

[manual][]

1. download

        % curl -#O https://raw.github.com/wilmoore/greater-than.js/master/greater-than.js

2. use

        <script src="greater-than.js"></script>

## Inspiration

- [selectn][]

## License

  [MIT](license)

[selectn]:  https://github.com/wilmoore/selectn
[Node.js]:  http://nodejs.org
[manual]:   http://yuiblog.com/blog/2006/06/01/global-domination/

