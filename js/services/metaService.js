angular.module('harshTaskMaster').factory('MetaService',function($http,$q){
	var _frequencies;
	var _owners;
	return{
		frequencies: function(){
			var deferred = $q.defer();
			if(_frequencies) {
				deferred.resolve(_frequencies);
  			} 
			else {
				$http({method: 'GET', url: "frequencies.json"}).success(function(data) {
					_frequencies = data;
					deferred.resolve(data);
				})
				.error(function(err) {
					deferred.reject(err)
				});
			}
      		return deferred.promise;
		},
		owners: function(){
			var deferred = $q.defer();
			if(_owners) {
				deferred.resolve(_owners);
  			} 
			else {
				$http({method: 'GET', url: "owners.json"}).success(function(data) {
					_owners = data;
					deferred.resolve(data);
				})
				.error(function(err) {
					deferred.reject(err)
				});
			}
      		return deferred.promise;
		}
	}
});