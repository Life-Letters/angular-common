'use strict';

/**
 * Injects the Life Letters navbar, as taken from the main website.
 */
angular.module('life.common')
  .directive('siteNav', function ($sce, $rootScope, config) {
    return {
      template: '<span ng-include="path"></span>',
      restrict: 'E',
      scope: true,
      link: function(scope, element, attrs) {
        scope.path = $sce.trustAsResourceUrl( config.urls.website+'site-nav' );
      }
    };
  })
  .directive('siteNavToggle', function ($sce, $rootScope) {
    return {
      link: function(scope, element, attrs) {
        $rootScope.$on('$locationChangeStart', function(evt, newUrl, oldUrl) {
          scope.turnOff();
        });
      }
    };
  })
  .directive('siteNavLinks', function ($sce, $rootScope) {
    return {
      link: function(scope, element, attrs) {
        $rootScope.$on('$locationChangeStart', function(evt, newUrl, oldUrl) {

          $('[highlight]', element).each(function() {
            var $el = $(this),
                pattern = $el.attr('highlight'),
                matches = pattern && pattern.length && newUrl.match(new RegExp(pattern));

            if ( matches ) {
              $el.addClass('active');
            } else {
              $el.removeClass('active');
            }
          });
        });
      }
    };
  });