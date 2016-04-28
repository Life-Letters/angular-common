'use strict';

/**
 * Injects the Life Letters footer, as taken from the main website, into 
 * the app.
 */
angular.module('life.common')
  .directive('footer', function ($sce) {
    return {
      template: '<span ng-include="path"></span>',
      restrict: 'E',
      scope: true,
      link: function(scope) {
        scope.path = $sce.trustAsResourceUrl(window.urls.website+'/footer');
      }
    };
  });