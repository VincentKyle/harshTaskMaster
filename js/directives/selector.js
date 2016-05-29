angular.module('harshTaskMaster').directive('selector',function(){
    return{
        restrict: 'EA',
        scope:{
            options:"=",
			labelValue:"@"
        },
        templateUrl:"templates/directives/selector.html",
        link: function(scope,element,attrs){
			console.log('initializing selectize for ' + scope.labelValue,$(element));
			console.log('local scope?',scope);
			/*
            angular.element(element).selectize({
                valueField: 'value',
                labelField: 'text',
                searchField: ['text'],
                options: scope.options
            });
			*/
			/*
			$(element).selectize({
				delimiter: ',',
				persist: false,
				valueField: 'value',
				labelField: 'text',
				searchField: ['text'],
				options: scope.options,
				create: function(input) {
					return {
						value: input,
						text: input
					}
				}	
			});
			*/
        }
    };
});