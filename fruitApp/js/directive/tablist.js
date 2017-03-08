app.directive('tabList', function(){
	return {
		restrict: 'E', //自定义的标签
		link: function(scope, element, atrr){
			scope.getStatus = function(index){
				//紧紧的围绕数据进行操作，改变dom的状态
				for(var i=0; i < scope.list.length; i++) {
					scope.list[i].active = false;
				}
				scope.list[index].active = true;
			}
			scope.list = [{
				link: '#/home',
				icon: 'ion-home',
				name: '首页',
				active: false
			},{
				link: '#/info',
				icon: 'ion-heart',
				name: '个人信息',
				active: false
			},{
				link: '#/cart',
				icon: 'ion-star',
				name: '购物车',
				active: false
			},{
				link: '#/home',
				icon: 'ion-gear-a',
				name: '订单列表',
				active: false
			}]
			for(var i=0; i < scope.list.length; i++) {
				if(location.hash === scope.list[i].link) {
					scope.list[i].active = true;
				}
			}

		},
		templateUrl: '/widget/tab.html',
		replace: true,
		scope: {
			//与外界作用域独立
		}
	}	 	
})