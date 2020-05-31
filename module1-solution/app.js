(function () {
  "use strict";
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);
  function LunchCheckController($scope) {
    $scope.itemCount = function () {
      var array = $scope.input;
      var words = "";
      if (array !== undefined) {
        words = array.split(",");
      }

      $scope.output = function () {
        if (words.length == 0) {
          return "Please enter data first.";
        } else if (words.length <= 3) {
          return "Enjoy!";
        } else {
          return "Too much!";
        }
      };
    };
  }
})();
