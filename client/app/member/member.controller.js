'use strict';

angular.module('meanSampleApp')
  .controller('MemberCtrl', function ($scope, $http) {
    $scope.members = [];

    $http.get('/api/things').success(function() {
      $scope.members = [{name:'a'}, {name:'b'}];
    });
  });
