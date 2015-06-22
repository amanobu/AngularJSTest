var mycontrol = function($scope){
    //$scope‚Å‚È‚¢‚Æ‚¾‚ß‚Á‚Û‚¢
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
        //ÀÛ‚Ì’Ç‰Áˆ—‚Í‚±‚±‚É‚¢‚ë‚¢‚ë‘‚¢‚Ä‚¢‚­
    }
}
