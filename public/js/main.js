"use strict";

const template = angular.module('template', []);

template.controller('main', function($scope){
  $scope.introduction = "Welcome to the APP!";
});
