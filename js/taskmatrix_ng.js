(function() {
	var app = angular.module('harshTaskMaster', []);
	$task = {};
	app.service('taskService',['$http',function($http){
		var taskList = [];
		var getTasks = function(){
			var taskData = [];
			return $http.get('/taskdata.json').then(function(response){
				//tasklist.tasks = data;
				console.log('http response returned',response);
				return response.data;
			});
			console.log('taskData',taskData);
			return taskData;
		};
		var saveTask = function(task){
			//save routine goes here, no one listening on the other end for now
		};
		return{
			getTasks: getTasks,
			saveTask: saveTask
		};
	}]);
	app.controller('taskDetailController',function($scope,taskService){
		this.task = $task || {};
		this.setTask = function(_task){
			console.log('changing task to',_task);
			this.task=_task;
		}
	});
	app.controller('taskListController',function($scope,taskService){
		var tasklist = this;
		tasklist.tasks = [];
		var serviceResponse = taskService.getTasks();	
		serviceResponse.then(function(result){
			tasklist.tasks = result;					 
		});
		console.log('tasks now',tasklist);

		this.getTask = function(task){
			console.log('received task',task);
			$scope.task = task;
			$task = task;
		}
		this.setTaskItem = function(property,value){
			this.task[property] = value;
		}
	});
	
})();