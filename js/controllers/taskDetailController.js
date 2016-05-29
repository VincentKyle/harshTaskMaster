angular.module('harshTaskMaster').controller('taskDetailController',function($scope,TaskService,$stateParams,MetaService,SettingsService){
	$scope.task = {};
	$scope.frequencies = [];
	this.getSelectedTask = function(currentValue,index,arr){
		if(currentValue.id.toString() === $stateParams.id.toString()){
			$scope.task = currentValue;
		}
	}
	TaskService.all().then(function(taskData){
		taskData.data.some(function (value, index, _ary) {
			if(value.id == $stateParams.id){
				$scope.task = value;
				return value.id == $stateParams.id;
			}
		});
	});
	MetaService.frequencies().then(function(frequencyData) {
		$scope.frequencies = frequencyData;
	});
	MetaService.owners().then(function(ownerData) {
		$scope.owners = ownerData;
	});
	SettingsService.tasksettings().then(function(settingsData){
		var _tasksettings;
		console.log('task settings data returned',settingsData);
		settingsData.data.some(function (value, index, _ary) {
			if(value.taskid == $scope.task.id){
				$scope.task.settings = value;
				return value.taskid == $scope.task.id;
			}
		});
	});
	$("#Notes").wysihtml5();
	$('.textarea').html($scope.task.Notes);
	$scope.owner = {};
	$scope.owner.model = 1;
	$scope.owner.config = {
		create: true,
		valueField: 'value',
		labelField: 'label',
		delimiter: '|',
		placeholder: 'Owner',
		onInitialize: function(selectize){
		// receives the selectize object as an argument
		},
		// maxItems: 1
	};
	
	$scope.frequency = {};
	$scope.frequency.model = 1;
	$scope.frequency.config = {
		create: true,
		valueField: 'value',
		labelField: 'label',
		delimiter: '|',
		placeholder: 'Frequency',
		onInitialize: function(selectize){
		// receives the selectize object as an argument
		},
		// maxItems: 1
	};
});