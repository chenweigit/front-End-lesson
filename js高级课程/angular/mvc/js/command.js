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

/**
 *   bind 指令
 * @param $scope
 */
function bindInfo($scope){
     $scope.str = 'ng-bind ok';
}

/**
 *  表单指令
 * @param $scope
 */

function formInfo($scope) {
    $scope.text ='cs';
    $scope.scoinfo = 'adf';
    $scope.clickEvent = function () {
        console.log('login');
    }
}


/**
 * 表单的  change  事件（和HTML 的事件不要混合）
 * @param $scope
 */
function changeVal($scope) {
    $scope.info={
        inp:'2',
        price:'50',
        out:'40'
    }
    $scope.chagnePri = function (){
        $scope.info.out = $scope.info.inp * $scope.info.price;
    }
}

/**
 * hide  and  show
 * @param $scope
 */
function hideElement($scope){
     $scope.showinfo = true;
    $scope.hideinfo = true;
}
