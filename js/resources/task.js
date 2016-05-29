angular.module('harshTaskMaster').factory('Task',function TaskFactory($resource){
	return $resource('taskdata.json/:id',{},{
		update: {
			method: "PUT"
		}
	});
});