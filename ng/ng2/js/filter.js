/**
 * Created by hasee on 2016/12/20.
 */


angular.module("myApp",[])
    .controller("filterCtrl",["$scope","$filter",function ($scope,$filter) {
        $scope.dataList = [
            {
                "name":"He Run dong",
                "age":28,
                "price":"2222222222",
                "time":new Date().getTime()-86400000
            },
            {
                "name":"zou run dong",
                "age":181,
                "price":"222",
                "time":new Date()
            },
            {
                "name":"li ning",
                "age":38,
                "price":"28888888888",
                "time":new Date()
            },
            {
                "name":"li na",
                "age":17,
                "price":"333333",
                "time":new Date()
            }

        ];
        $scope.name = "du rui ming";
        $scope.name   =   $filter("limitTo")($scope.name,5);
        //接收新数据  =>   使用过滤器（"limitTo"）(要过滤的数据，过滤器需要的参数,.,.,.,)

        $scope.dataList = $filter("orderBy")($scope.dataList,'age')
    }]);