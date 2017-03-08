app.controller('homeCtrl', ['$scope', 'listService', function(scope, list){
     scope.name = '首页';
     console.log(34);
     /*list.getData.success(function(){

     })*/
     if(list.getData()) {
          console.log(list.getData());
          scope.homedata = list.getData();
          scope.$watch('homedata', function(){
               console.log('我进行了改变');          
          }, true);
          return;
     }
     list.getHttpData(function(res){
          //数据从服务器端直接返回
     	var data = res.product_list.slice(1);
          var cartlist = list.getCoreCartData(); //从缓存数据中心中得到我们购物列表
     	for(var i =0; i <data.length; i++) {
               data[i].num = 0;
               for(var key in cartlist) {
                   if(data[i].name === cartlist[key].name) {
                         data[i].num = cartlist[key].num
                   }
               }
     	}
     	list.setData(data); //对已经从服务端得到的数据进行一次保存
          console.log('---------home');
          console.log(data);
     	scope.homedata = data; //数据模型双向数据绑定

          scope.$watch('homedata', function(){
               console.log('我进行了改变');          
          }, true);
     })
}]);