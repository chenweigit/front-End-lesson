/**
 * Created with 陈伟.
 * User: ck
 * Date: 14-10-12
 * Time: 下午9:27
 *
 */

/**
 *   数组的循环
 * @param $scope
 */
function listIfno($scope){
     $scope.info = ['屌丝','逆袭'];
}

function bindInfo($scope){
     $scope.str = 'ng-bind ok';
}

/*
 表单的  change  事件
 */
function changeVal($scope) {
     $scope.info={
         inp:1,
         price:50,
         out:50
     }

    $scope.chagnePri=function(){
        $scope.info.out =  $scope.info.inp * $scope.info.price;
    }

}
