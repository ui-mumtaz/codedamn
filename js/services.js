var app = angular.module('mainApp',[]);

app.service('random',function(){
	var randomNumber = Math.random();
	this.generate = function(){
		return randomNumber;
	};	
});

app.controller('serviceCtrl',function($scope,random){
	$scope.generateRandom = function(){
		var generatedNumber = random.generate();
		$scope.randomNumber = generatedNumber;
	};
});
