app.controller('cartCtrl', ['$scope', 'listService', function(scope, list){
       var data = list.getCart(); //data --> CoreData
       console.log(data);
       if(data) {
       		scope.list = data;
       }
       scope.$watch('list', function(newvalue){
       		console.log(newvalue); 	
       }, true)
}]);

//var t = [{name:1}, {name:2}]
/*
var arr = [];

arr.push(t[1]);

arr[0].name = '678';

t[1].name  //678;
*/

