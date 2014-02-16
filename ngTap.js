angular.module('keitoaino.ngTap', []).directive('ngTap', function() {
  var isTouchDevice = !!("ontouchstart" in window);

  return function(scope, elm, attrs) {
    if (isTouchDevice) {
      var tapping = false;

      elm.bind('touchstart', function() {
        tapping = true;
        elm.addClass('tapped');
      });

      elm.bind('touchmove', function() {
        tapping = false;
        elm.removeClass('tapped');
      });

      elm.bind('touchend', function() {
        tapping && scope.$apply(attrs.ngTap);
        elm.removeClass('tapped');
      });
    }
    else
      elm.bind('click', function() {
        scope.$apply(attrs.ngTap);
      });
  };
});
