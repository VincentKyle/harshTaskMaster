angular.module('harshTaskMaster').controller('taskListController',function($scope,Task){
    //$scope.tasks = Task.query();
    this.getActiveTask = function(){
        return $scope.activeTask;
    }
    this.setActiveTask = function(task) {
        console.log('Setting active task',task);
        $scope.activeTask = task;
    }
});