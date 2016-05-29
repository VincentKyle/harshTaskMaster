angular.module('harshTaskMaster').factory('TaskService',['$http',function TaskFactory($http){
	return{
		all: function(){
			return $http({method:'GET',url:'taskdata.json'}).success(function(data){
				return data;
			});
		},
		find: function(id){
			return $http({method:'GET',url:''+id});
		}
	};
}]);
/*
var app = angular.module('harshTaskMaster', []);
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
*/