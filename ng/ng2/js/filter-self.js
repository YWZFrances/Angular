/**
 * Created by hasee on 2016/12/20.
 */


var m1 = angular.module("myApp",[])
    .filter("firstUpperCase",function () {

        return function (str) {
            //console.log(str.toUpperCase())
           // str = "jia lin"
            //"J"+ia lin
            //首字母大写的过滤器
            var newStr = str[0].toUpperCase()+str.substring(1);
            return newStr //返回过滤的结果

        }
    })
    .filter("myFilter",function () {

        return function (str) {
        // "background-color"
           var arr  = str.split("-");//["background","color"]
            arr = arr.map(function (ele,index) {
                //["jia","lin","dd","","asd"]
                if(index&&ele&&ele[0].charCodeAt()>=97&&ele[0].charCodeAt()<=122){
                    //如果是小写字母，而且第一个字母不需要转大写
                    ele = ele[0].toUpperCase()+ele.substring(1);
                }

                return ele;
                //["jia","Lin","Dd","","Asd"]
            });
            return arr.join("");
            //jiaLinDdAsd
            //时间日期，所单词首字母大写,自定义(组内不要重复) 自定义3个过滤器
//挂载
        }
    })
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
        //第一次调用，是确认使用哪个过滤，
        //第二次调用，才是真实使用过滤器
        $scope.name = "jia lin"; //Jia Lin

        $scope.name2 = "jia-lin-dd-asd";
        //["jia","lin","dd","","asd"]


       /* $scope.name = $filter("myFilter")($scope.name)
        console.log($scope.name)*/

    }]);



//console.log(m1)