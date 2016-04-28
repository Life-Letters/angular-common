'use strict';

/**
 * Validates whether someone is of legal age, i.e. over 18. Can optionally
 * pass a date format to ensure it interprets the date properly.
 *
 * Usage
 *
 * of-legal-age="DD/MM/YYYY"
 */
angular.module('life.common')
  .directive('ofLegalAge', function (moment) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function postLink(scope, element, attrs, ctrl) {
        ctrl.$validators.ofLegalAge = function(modelValue, viewValue) {
	        var b = moment(viewValue, attrs.ofLegalAge || 'DD/MM/YYYY');
					return moment().diff(b, 'years') > 18;
	      };
      }
    };
  });