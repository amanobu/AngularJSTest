var mycontrol = function($scope){
    //$scope�łȂ��Ƃ��߂��ۂ�
    $scope.users = [
        {"name":"zZZ", "score":"999"},       
        {"name":"ama", "score":"123"},
        {"name":"kuso", "score":"456"},
        {"name":"hoge", "score":"789"}
    ];
    $scope.today = new Date();
}

var userItemCtrl = function($scope){
    $scope.increment = function(){
        $scope.user.score++;
    };
}


var formCtrl = function($scope){
    $scope.addUser = function(){
        //���ۂ̒ǉ������͂����ɂ��낢�돑���Ă���
    }
}
