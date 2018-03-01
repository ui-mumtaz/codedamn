/**
* mainApp Module
*
* Description
*/
var app = angular.module('mainApp', []);

app.filter('base',function(){
	var baseReturn = function(input, base){
		var parsedInput=parseInt(input,10); 
		var parsedBase=parseInt(base,10); 
		if (isNaN(parsedInput) || isNaN(parsedBase) || parsedBase <= 1 || parsedBase >=37 ) return 'Error! invalid base';
		return parsedInput.toString(parsedBase);

	}
	return baseReturn;
});