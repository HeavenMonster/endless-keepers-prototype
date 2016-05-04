angular.module("endlessKeepers", [])
  .controller("masterController", ["$scope", function($scope) {
    var vm = this;

    vm.init = function() {
      console.log("Angular works fine.");
    }

  }]);
