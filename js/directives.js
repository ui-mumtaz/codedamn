/**
* mainApp Module
*
* Description: Directives
*/
var app = angular.module('mainApp', []);

app.directive('myFirstDirective',function(){
	function linkFunction(scope,elem,attrs){
		elem.bind('click',function(){
			console.log(elem[0].innerHTML);
		})

	}
	return {
		template:'Hellow World!',
		restrict:'E',
		link: linkFunction
	};
});

app.directive('mySecondDirective',function(){
	function secondLinkFunction($scope,elem,attrs){
		$scope.name = "Hello World";
		$scope.changeName = function(newName){
			$scope.name = newName;
		}
	}
	return {
		restrict: 'EA',
		link: secondLinkFunction,
		template: '<span ng-click="changeName(\'hey there \')">Current text: {{name}}</span>'
	}
});

app.directive('myThirdDirective',function(){
	function thirdLinkFunction($scope,elem,attrs){
		$scope.name = "Hello World";
		$scope.changeName = function(newName){
			$scope.name = newName;
		}
	}
	return {
		restrict: 'EA',
		scope:true,
		link: thirdLinkFunction,
		template: '<span ng-click="changeName(\'hey there \')">Current text: {{name}}</span>'
	}
});