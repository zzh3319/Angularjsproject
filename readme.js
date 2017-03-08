Angularjs mvvm框架 __>  module view view module

数据模型与视图的双向数据绑定的一个框架（核心： 双向数据绑定）

Angularjs 第一次很有革命意义的框架

Angularjs 1.xxx  1.0 ----> 1.8 js去进行前端的开发

Angularjs 2.0  typeScript的语法进行开发 
（为后端设计的，让后端逐渐转换成前端）

typeScript 诞生？意义？
javascript 非常火，导致互联网很火，导致网页的制作很火，单页面应用，js，

pc端中软件开发会变的非常低迷， windows比较尴尬，windows它里面有很多
软件开发工程师， 这个时期这些软件开发工程师，基本闲着了。

软件开发 ---》 后端语言 c#  它们对c#非常的精通。

它们就想互联网方面的产品，因为微软也不能让他们闲着。

写了一个工具  它们去用c#的语法去写前端， 写完之后，
利用这个工具， 将c#的语法转译成JavaScript。 

typeScript

鄙视链 （c c++ java c# php javascrcipt...）

Angularjs 1.xxx  1.0 --- 1.8

1. 指令 每个指令有它独特的功能， 
有作用范围（与html的层级结构有关系）

ng-app --> 让视图层拥有Angularjs框架的特性以及能力

前端模板： 在视图中混入逻辑 view层

ng-model --> 让表单元素（input , form, select,textarea）
拥有双向数据绑定的能力，让其与数据模型相关联，并反映在
我们的视图上。该绑定的数据模型，会跟随对应表单元素中value
值的变化而变化。


ng-controller --> 让控制层与视图产生联系的指令

ng-repeat --> 进行视图中循环逻辑的处理


ng-show --> 对应视图区域进行显示或者隐藏

ng-click --> 对dom节点进行点击事件的绑定

2. 控制层 每个控制层都有自己的作用域（函数中的作用域差不多）
function Ctrl(){
	var name = 123;
	function innerCtrl(){
	 	//var name = 78;
	 	console.log(name);		 	
	} 	
	innerCtrl();
}
视图层的革命： 在视图层，利用html的结构去写函数

突出一个核心前端编程思想，数据与视图的分离，所有的操作，都紧紧的围绕
数据进行操作，极大的减少dom的操作，进行快速的开发


1. 过滤器

原生过滤器： | uppercase, lowercase, date: "yyyy-MM-dd"

自定义过滤器： app.filter('query', function(){
	return function(target, param){
			 	
	}
})

万能过滤器：|filter:{name: keyword, age: age}


全局作用域 $rootScope
2. 数据层---> 数据工厂 --> factory,给所有相关的控制层使用

通过ng-cloak 解决花括号闪烁的问题


3. ng中Ajax的发送

scope.$watch ---> 监控作用域中数据模型的改变
scope.$apply ---> 对不再ng上下文中的语句进行强制视图刷新，
使其具有双向数据绑定的能力

$http({
	url: '/v1/pois',
	method: 'get',
	params: {
		type: 'search',
		city_id: 1
	}
}).success(function(res){
	console.log(res);
	scope.list = res; //进行数据模型的绑定，相应的视图会被自动刷新	
}).error(function(res){
	console.log('我数据接收失败了');	 	
})

$http({
	url: '/v1/pois',
	method: 'post',
	data: {
		type: 'search',
		city_id: 1
	}
}).success(function(res){
	console.log(res);
	scope.list = res; //进行数据模型的绑定，相应的视图会被自动刷新	
})

4. ng的自定义指令（比较核心，组件化开发的先驱）
因为ng中省去了dom节点的操作，但是会遇到一个问题，
当存在复杂dom节点操作的时候， ng还是会不好处理，
ng就引入自定义指令的概念，对视图进行组件化开发，最大限度上
解决复杂dom的操作问题。

directive(指令)


5. ng中的路由--》 单页面的应用（监听hash值的改变）
ngRoute, 路由的设计，以及帮我们设计好， 所以我们要学习
怎么使用它


综合的ng项目---》 每日优先 --》o2o的项目

1 首页购物车列表页
2.购物车页
3. 登录注册
4. 订单列表的信息
5. 地址搜索页，商品搜索页


前端中针对于移动端的一个布局的框架，该框架以angularjs为
基础，有自己已经写好的组件以及相应的样式。
Ionic  Ionic既是一个CSS框架也是一个Javascript(ng) UI库


css 布局
fonts 布局中的字体文件
js
	controllers --> ng中各个视图里的控制层
	directive -->   ng中一些可以复用的组件（自定义指令）
	services  --> ng中数据服务中心（数据工厂）
	app.js --> 入口js文件，初始化ng, 进行路由的配置
lib
	angular-route.js ---> ng的路由模块
	bundle.js ---> ionic.js(实现关于它自己的一些自定义组件) + ng.js
	ionic.css ---> 移动端开发的css框架,通过特殊class名字，得到对应移动端样式

view  项目中每个页面的视图

widget 项目中每个可以复用组件的视图
