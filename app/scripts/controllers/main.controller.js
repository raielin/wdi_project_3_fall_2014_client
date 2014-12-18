'use strict';
stopInApp.controller('MainCtrl',
  function MainCtrl($scope) {
    $scope.stopIn = {
      origin: 'Boston, MA'
      destination: 'Cambridge MA'
      showError: function(status {
        toastr.error(status);
      })
    };
  });
