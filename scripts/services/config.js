'use strict';

angular.module('life.common')
  .service('config', function (lodash) {
  	var settings = {
  				urls: {
  					website: 'https://lifeletters.com/',
  				}
		  	};

		// Allow the default settings to be overwritten 
		if ( window.urls ) {
			settings.urls = lodash.extend(settings.urls, window.urls);
		}
		return settings;
  });