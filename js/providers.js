var app = angular.module('mainApp',[]);

app.provider('date',function(){
		return{
			$get: function(){
				return {
					showDate: function(){
						var date = new Date();
						return date.getHours();
					}
				}
			}
		}
});

app.controller('providerCtrl',function($scope,date){
	 $scope.greetingsMessage = date.showDate();
});
