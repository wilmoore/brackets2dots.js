
// expose `brackets2dots`

module.exports = brackets2dots;

/**
 * Convert string with bracket notation to dot property notation.
 *
 * ### Examples:
 *
 *      brackets2dots('group[0].section.a.seat[3]')
 *      //=> 'group.0.section.a.seat.3'
 *
 * @param  {String} string
 * original string
 *
 * @return {String}
 * dot/bracket-notation string
 */

function brackets2dots(string) {
  return ({}).toString.call(string) == '[object String]'
       ? string.replace(/\[(\d+)\]/g, '.$1')
       : ''
}

