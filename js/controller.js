/*

var app = angular.module('mainApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		template: 'Welcome user!'
	})
	.when('/anotherPage',{
		template: 'Welcome user! Again'
	})
	.otherwise({
		template: 'error 404!'
	});
});*/

var app = angular.module('mainApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'login/login.html'
	})
	.when('/dashboard',{
		resolve:{
			"check":function($location,$rootScope) {
				if (!$rootScope.loggedIn) {
					$location.path('/')
				}else{
					templateUrl: 'login/dashboard.html'
				}
			}
		},
		
	})
	.otherwise({
		template: 'error 404!'
	});
});

app.controller('loginCtrl', function($scope, $location){
	$scope.submit= function 	() {
		var uName = $scope.username;
		var uPass = $scope.password;
		if (uName=='admin'&& uPass=='admin') {
			$rootScope.loggedIn=true;
			$location.path('/dashboard');

		}else{$location.path('/error')}
	}
});

app.controller('people',function($scope,$http){
	$http.get('http://localhost:81/angular/codedamn/data/database.json')
	.success(function(response){
		$scope.persons=response.records;
	});
});

app.controller('loopCtrl',function($scope){
	var range = 10;
	var myRange = [];
	for (i = 0; i < range; i++) {
		myRange.push(i);
	}
	$scope.myRange=myRange;
});

app.controller('counterCtrl',function($scope){
	$scope.counter = -1;
	$scope.$watch('myText',function(newValue,oldValue){
		/*console.log("New Value: "+newValue);
		console.log("Old Value: "+oldValue);*/
		$scope.counter++;
	});
});

app.controller('randomCtrl',function($scope){
	$scope.myRandomNumber = Math.random();
	document.querySelector('button').addEventListener('click',function(){
		console.log('Button Clicked');
		$scope.myRandomNumber = Math.random();
		$scope.$digest();
	},false);
});