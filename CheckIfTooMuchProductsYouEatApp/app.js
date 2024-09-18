(function () {
  "use strict";
  angular
    .module('ProductsApp', [])
    .controller('ProductsController', ProductsController);

  ProductsController.$inject = ['$scope', '$filter'];

  function ProductsController($scope) {
    $scope.products = "";
    $scope.answerForUser = ""
    $scope.howMuchEatForLunch = function () {
      if ($scope.products.length === 0) {
        $scope.answerForUser = "Please enter data first!"
      } else {
        var resultArray = $scope.products.split(","); //create a list of products
        var filteredArray = resultArray.map(e => e.trim()).filter(e => e !== ''); // remove empty strings
        if (filteredArray.length === 0) {
          $scope.answerForUser = "Please enter data first from words!"
        } else {
          $scope.answerForUser = filteredArray.length <= 3 ? "Enjoy!" : "Too much!";
        }

      }
    };

  }
})();
