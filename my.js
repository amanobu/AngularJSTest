var mycontrol = function($scope){
    //$scopeでないとだめっぽい
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
        //実際の追加処理はここにいろいろ書いていく
    }
}
