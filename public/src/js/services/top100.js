'use strict';

angular.module('insight.blocks')
  .factory('Top100',
    function($resource) {
      return $resource('/api/top100');
  });
