/**
 * Simple directive which allows to execute callback when user scrolls over element
 *
 * Inspired by http://stackoverflow.com/a/18206656
 */
module.exports = require('an').directive(whenScrolled);

function whenScrolled() {
  return function(scope, elm, attr) {
    var raw = elm[0];
    elm.bind('scroll', function() {
      if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
        scope.$apply(attr.whenScrolled);
      }
    });
  };
}
