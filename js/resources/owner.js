angular.module('harshTaskMaster').factory('OwnerResource',function TaskOwnerFactory($resource){
	return $resource('owners.json',{},{
		update: {
			method: "PUT"
		}
	});
});