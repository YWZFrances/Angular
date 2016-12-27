angular.module("directives",[])
.directive("myHeader",function () {
    return {
        restrict:"EA",
        templateUrl:'template/header.html',
        replace:false,
        transclude:true
    }
})
//.directive("myFooter",function () {
//  return {
//      restrict:"EA",
//      templateUrl:'template/footer.html',
//      replace:false,
//      scope:{
//          active:"@active",
//         
//      },
//      controller:function ($scope) {
//          $scope.titleData = ["首页","列表","购物车","我的"]
//          console.log($scope.active)
//
//      }
//  }
//});
