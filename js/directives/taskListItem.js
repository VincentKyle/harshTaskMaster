angular.module('harshTaskMaster')
.directive('taskListItem', function() {
  return {
    restrict: "E",
    require: "^taskList",
    scope: {
      task: "="
    },
    templateUrl: 'templates/directives/taskListItem.html',
    link: function(scope, element, attrs, taskList) {
      scope.isActive = function() {
        var _activeTask = taskList.getActiveTask();
        return (_activeTask === undefined) ? false : _activeTask.id === scope.task.id;
      }
      scope.makeActive = function(){
        console.log('item, setting active',scope.task);
        taskList.setActiveTask(scope.task);
      }
      scope.taskCount = function() {
        return taskList.getCount(scope.task);
      }
      scope.makeInactive = function(evt){
        // Required to stop the makeActive click handler from firing on the parent element
        evt.stopPropagation();
        taskList.setActiveTask(false);
      }
    }
  };
});