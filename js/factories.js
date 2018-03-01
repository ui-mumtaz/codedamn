var app = angular.module('mainApp',[]);

app.factory('random',function(){
	var randomFactoryObject = {};
	var randomNumber = Math.random();
	randomFactoryObject.generate = function(){
		return randomNumber;
	};	
	return randomFactoryObject;
});

app.controller('factoryCtrl',function($scope,random){
	$scope.generateRandom = function(){
		var generatedNumber = random.generate();
		$scope.randomNumber = generatedNumber;
	};
});
