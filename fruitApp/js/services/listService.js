app.factory('listService', function($http){
	//数据工厂	 列表页的数据进行处理


	//本地缓存Store的实现
	function Store(nameSpace, data){
		if(data) {
			//数据的缓存
			localStorage.setItem(nameSpace, JSON.stringify(data));
			return;
		}
		return (nameSpace && JSON.parse(localStorage.getItem(nameSpace))) || null;	
	}
	//通过ajax获取列表页的数据
	var list = $http({
		url: 'http://as-vip.missfresh.cn/v2/product/home/index?device_id=0455f639779ac66cf8723f436fd14b1e&env=web&platform=web&tdk=14865367400295283104&uuid=0455f639779ac66cf8723f436fd14b1e&version=2.3.4',
		method: 'post',
		data: {
			lat:39.99173,
			lng:116.30965
		}
	})
	var coreData = null; //数据工厂里面的核心数据

	var coreCartData = {
		//空对象，购物车列表
	}

	function getCartList(obj){
		var arr = [];
		for(var key in obj) {
			arr.push(obj[key])
		}
		return arr;
	}
	//list.success...
	return {
		getHttpData: function(callback){
			//callback 被称为回调函数： 当一个形参被作为
			//函数方法被传递给另一个方法的时候
			list.success(callback)	 	
		},
		setData: function(data){
			coreData = data;  //data --> []	 	
		},
		getData: function(){
			return coreData 	
		},
		getCoreCartData: function(){
			return Store('cartlist') || {};		 	
		},
		setCart: function(item, scope){
			coreCartData[item.name] = item;

			if(item.num === 0) {
				delete coreCartData[item.name];
				if(scope && scope.list) {
					scope.list.splice(scope.index, 1);
					//单个购物车从数组中删除的方法
				}
			}
			//本地缓存 购物车列表
			Store('cartlist', coreCartData);
			//动态的创建购物车列表 	
		},
		getCart: function(){
			var arr = [];
			if(!coreData) {
				coreCartData = Store('cartlist') || {};
				return (coreCartData && getCartList(coreCartData)) || false
			}
			for(var i =0; i < coreData.length; i++) {
				if(coreData[i].num !== 0) {
					arr.push(coreData[i])
				}
			}
			return arr; //得到数组类型购物车列表
		}
	}
})