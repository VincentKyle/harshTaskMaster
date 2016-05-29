angular.module('harshTaskMaster').factory('FrequencyResource',function TaskFrequencyFactory($resource){
	return $resource('frequencies.json',{},{
		update: {
			method: "PUT"
		}
	});
});