'use strict';

angular.module('insight.blocks').controller('Top100Controller',
  function($scope, Global, Top100) {
  $scope.global = Global;
  $scope.loading = false;

  $scope.list = function() {
    $scope.loading = true;

    Top100.get({}, function(res) {
      $scope.top100 = res.top100;
    });
  };

});
