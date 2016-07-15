'use strict';

/**
 * Converts between a string and Date object allowing the user to edit the date in an
 * input field and have it stored as a Date object in the model. Can optionally
 * pass a date format to ensure it interprets the date properly.
 *
 * Usage
 *
 * to-iso-date-string="DD/MM/YYYY"
 * 
 * Taken from: http://stackoverflow.com/questions/14474555/how-to-format-a-date-using-ng-model
 * 
 * @ngdoc directive
 * @name life.common.directive:toIsoDateString
 * @description
 * # toIsoDateString
 */
angular.module('life.common')
  .directive('toIsoDateString', function (moment) {
    return {
	    require:'^ngModel',
	    restrict:'A',
	    priority: 101, // must be greater than ui-mask (100)
	    link: function (scope, elm, attrs, ctrl) {
	      var dateFormat = attrs.toIsoDateString || 'DD/MM/YYYY';

	      attrs.$observe('toIsoDateString', function (newValue) {
	        if (dateFormat === newValue || !ctrl.$modelValue) {
	        	return;
	        }
	        dateFormat = newValue;
	        ctrl.$modelValue = (new Date(ctrl.$setViewValue)).format('YYYY-MM-DD');
	      });

	      ctrl.$formatters.push(function (modelValue) {
	        if (!dateFormat || !modelValue) {
	        	return '';
	        }
	        var retVal = moment(modelValue).format(dateFormat);
	        return retVal;
	      });

	      ctrl.$parsers.push(function (viewValue) {
	        var date = moment(viewValue, dateFormat),
	        		dateStr = (date && date.isValid()) ? date.format('YYYY-MM-DD') : '';
	        return dateStr;
	      });

	      ctrl.$validators.isValidDate = function(modelValue, viewValue) {
	        return moment(viewValue, dateFormat).isValid();
	      };
	    }
	  };
	});
