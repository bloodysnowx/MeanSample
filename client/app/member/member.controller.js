'use strict';

angular.module('meanSampleApp')
  .controller('MemberCtrl', function ($scope, $http) {
    $scope.members = [];

    $http.get('/api/members').success(function(members) {
      // $scope.members = [{name:'a'}, {name:'b'}];
      $scope.members = members;
    });
  });
