var app = angular.module('myApp', []);
app.controller('foodCtrl', function($scope) {
    $scope.items = ["cheese", "milk", "kiwi", "cookies"];
    $scope.addItem = function() {
            $scope.foodItem = ($scope.addFood).toLowerCase();
            // Converts entered text to lower case so customer can input in any case;
            if ($scope.items.indexOf($scope.foodItem) !== -1) {
                alert("Item already exists")
            } else {
                $scope.items.push($scope.foodItem);
                this.addFood = null;
            }
        },
        $scope.deleteItem = function() {
            $scope.deleteFoodItem = ($scope.deleteFood).toLowerCase();
            // Converts entered text to lower case so customer can input in any case;
            if ($scope.items.indexOf($scope.deleteFoodItem) !== -1) {
                $scope.index = $scope.items.indexOf($scope.deleteFoodItem);
                $scope.items.splice($scope.index, 1);
                this.deleteFood = null;
            } else {
                alert("Item not Found");
            }
        };

});
