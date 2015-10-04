(function() {
  'use strict';

  angular
    .module('fc.autocomplete', ['fc.util'])
    .directive('fcAutoComplete', FcAutoComplete);

  function FcAutoComplete() {
    return {
      restrict: 'EA',
      scope: {
        wmpTotal: '=',
        position: '@',
        gotoPage: '&',
        step: '=',
        currentPage: '='
      },
      controller: Controller,
      controllerAs: 'vm',
      templateUrl: 'template.html'    
    };
  }

  function Controller($scope) {
    var vm = this;
  }

})();
