//这是项目入口js文件
var app = angular.module('fruitApp', ['ionic', 'ngRoute']);

//因为是单页面开发，所以这个要进行路由的配置
app.config(function($routeProvider){
	$routeProvider.when('/home', {
		templateUrl: '/view/home.html', //首页的视图
		controller: 'homeCtrl' //首页的控制层
	}).when('/cart', {
		templateUrl: '/view/cart.html', //购物车的视图
		controller: 'cartCtrl' //购物车的控制层
 	}).when('/info', {
 		templateUrl: '/view/info.html', //个人信息的视图
 		controller: 'infoCtrl' //个人信息的控制层
 	}).when('/address', {
 		templateUrl: '/view/address.html', //地址搜索的视图
 		controller: 'addressCtrl' //地址搜索的控制层
 	}).otherwise({
 		redirectTo: "/home"
 	})
})

//我们可以通过对应视图的对应的控制层，进行数据模型的双向数据绑定