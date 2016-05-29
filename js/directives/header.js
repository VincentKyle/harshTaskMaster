angular.module('harshTaskMaster')
.directive('pageHeader', function() {
  return {
    restrict: "E",
    require: "^taskList",
    scope: {
      task: "="
    },
    templateUrl: 'templates/directives/header.html',
    link: function(scope, element, attrs, taskList) {
      
    }
  };
});