var brackets2dots = require('..');
var assert = require('assert');

describe('brackets2dots()', function(){

  it('returns a dot-notation string', function() {
    var path = 'group[0].section.a.seat[3]';
    assert(brackets2dots(path) === 'group.0.section.a.seat.3');
  });

});
