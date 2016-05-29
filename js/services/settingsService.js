angular.module('harshTaskMaster').factory('SettingsService',function($http){
	var _tasksettings = [];
	return{
		tasksettings: function(){
			return $http({method: 'GET', url: "tasksettings.json"}).success(function(data) {
				return data;
			});
		}
	}
});