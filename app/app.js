var myNinjaApp = angular.module('myNinjaApp',[]);

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

    $scope.removeNinja = function(ninja){
        var removeNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removeNinja, 1);
    }

    $scope.addNinja = function(){
        $scope.ninjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            rate: parseInt($scope.newninja.rate),
            available: true
        });

        $scope.newninja.name = "";
        $scope.newninja.belt = "";
        $scope.newninja.rate = "";

    }

    $scope.ninjas = [
        {name: 'Yoshi', rate: 50.12, belt: 'Green', available: true},
        {name: 'Crystal', rate: 30, belt: 'Yellow', available: true},
        {name: 'Ryu', rate: 500, belt: 'Black', available: false},
        {name: 'Shaum', rate: 1000, belt: 'Black', available: true}
    ]

}]);