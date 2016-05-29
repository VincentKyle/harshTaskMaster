angular.module('harshTaskMaster', ['ngResource','ui.router','selectize','datetimepicker','angular-web-notification'])
.config(['$stateProvider', '$urlRouterProvider','datetimepickerProvider',function($stateProvider, $urlRouterProvider, datetimepickerProvider){
	//default options
	datetimepickerProvider.setOptions({
		locale: 'en'
	});
	//routing
	$urlRouterProvider.otherwise('/');
    $stateProvider.state('app', {
		url:'/',
		templateUrl: 'templates/pages/main.html',
        views: {
			'main':{
				templateUrl: 'templates/pages/main.html'	
			},
			'header@app':{
				templateUrl: 'templates/pages/header.html'
            },
			/*
            'tasks': {
                templateUrl: 'templates/pages/tasks.html',
                controller: 'taskListController'
            },
			*/
            'taskdetail@app':{
                templateUrl: 'templates/pages/task_empty.html'
            }
        }
	})
	.state('app.detail', {
		url:'task/:id',
        views: {
            'taskdetail@app':{
                templateUrl: 'templates/pages/task.html',
                controller: 'taskDetailController'
            }
        }
	});
}]);