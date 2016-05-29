angular.module('harshTaskMaster')
.directive('taskDetail', function() {
  return {
    restrict: "E",
    require: "^taskList",
    scope: {
      task: "="
    },
    templateUrl: 'templates/directives/taskDetail.html',
    link: function(scope, element, attrs, taskList) {
      console.log('inside detail directive', taskList);
    }
  };
});