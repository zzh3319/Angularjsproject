app.directive('singleCart', function(listService){
	return {
		restrict: 'E',
		link: function(scope, element, attr){
			scope.plus = function(){
				scope.item.num++; 	
			}
			scope.minus = function(){
				scope.item.num--;
				
			}
			scope.$watch('item', function(newvalue, oldvalue){
				listService.setCart(newvalue, scope);	//设置数据中心的购物车列表， 并且进行本地缓存
			}, true)
		},
		templateUrl: '/widget/cart.html',
		replace: true,
		scope: {
			item: '=item', //item属于单个购物车中单个数据对象
			list: '=list',
			index: '=index'
		}
	} 	
})