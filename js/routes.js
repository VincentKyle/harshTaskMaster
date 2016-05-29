angular.module('harshTaskMaster').config(['$routeProvider',function($routeProvider){
    $routeProvider
    	.when('/',{
    		redirectTo: '/tasks'
    	})
    	.when('/tasks',{
    		templateUrl: 'templates/pages/tasks.html',
    		controller: 'taskListController'
    	})
    	.when('/task/:id',{
    		templateUrl:'templates/pages/task.html',
    		controller: 'taskDetailController'
    	})
    	.otherwise({
    		redirectTo: '/'
    	});
}]);