'use strict';
stopInApp.controller('MainCtrl',
  function MainCtrl($scope) {
    $scope.stopIn = {
      showError: function(status) {
        toastr.error(status);
      }
    };
  });
