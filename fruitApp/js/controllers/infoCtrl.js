app.controller('infoCtrl', ['$scope', '$ionicModal', function(scope, ionicModal){
     //声明一个弹框
     ionicModal.fromTemplateUrl('/widget/login.html', {
	     scope: scope,
	     animation: 'slide-in-up'
	 }).then(function(modal) {
	     scope.modal = modal;
	     scope.modal.show(); //展示对话框
	 });
}]);