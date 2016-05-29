angular.module('harshTaskMaster')
.directive('taskList', function(TaskService) {
  return {
    replace: true,
    restrict: "E",
    scope: {
      //activeTask: "="
    },
    controller: function($scope) {
      //$scope.activeTask = {};
      this.getActiveTask = function(){
        return $scope.activeTask;
      }
      this.setActiveTask = function(task) {
        console.log('Setting active task',task);
        $scope.activeTask = task;
      }
    },
    templateUrl: 'templates/directives/taskList.html',
    link: function(scope, element, attrs) {
	/*
      Task.query().$promise.then(function(taskData) {
		  console.log('task data',taskData);
		  scope.tasks = taskData;
      });
	*/
		TaskService.all().then(function(taskData){
			console.log('task data',taskData);
			scope.tasks = taskData.data;
		});
    }
  };
});