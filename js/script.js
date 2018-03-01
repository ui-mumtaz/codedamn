/**
*  Module
*
* Description
*/
var app= angular.module('mainApp', []);

app.service('fromService',function(){
	this.message="This is from the service";
});

app.factory('fromFactory', function(){
	var factory={};
	factory.message="This is from the factory";
	return factory;
});

app.provider('fromProvider',function(){
	var providerMessage="This is from the provider";
	return{
		$get:function(){
			return{
				message:providerMessage
			}
		}
	}
});

app.controller('fromSFPCtrl',function($scope,fromService,fromFactory,fromProvider){
	$scope.greetingsMessage=[fromService.message,fromFactory.message,fromProvider.message];
});

app.controller('ngShowDirectiveCtrl',function($scope){
	$scope.show='firstMessage';
	$scope.toggle=function(){
		$scope.show = $scope.show == 'firstMessage' ? 'secondMessage' : 'firstMessage';
	};
});

app.controller('todoAppCtrl',function($scope){
	$scope.tasks = [];
	var taskData = localStorage['tasksList'];

	if (taskData!==undefined) {
		$scope.tasks=JSON.parse(taskData);
	}
	$scope.searchEnter=function() {
		if(event.which==13 && $scope.task != ''){
			$scope.addTask();
		}
	};
	
	$scope.addTask=function(){
		$scope.tasks.push({'taskMessage':$scope.task,'status':false});
		$scope.task='';
		localStorage['tasksList'] = JSON.stringify($scope.tasks);
		console.log(localStorage);
	};

	$scope.contentEdit = function(message){
		for (i = 0; i < $scope.tasks.length; i++) {
			if ($scope.tasks.taskMessage==message) {
				$scope.tasks[i].taskMessage = event.target.innerText;
			}
		}

		localStorage['tasksList'] = JSON.stringify($scope.tasks);

		event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
	};

	$scope.enterAgain=function(message){
		if(event.which==13 && message != ''){
			$scope.contentEdit(message);
		}
	};
});