(function () {
  angular.module('onosDeployments', [])
  .controller('mainCtrl', function($scope){
    
    $scope.streamList = [
      {name: 'Don\' Recall', location: 'Brazil', url: 'http://v2v.cc/~j/theora_testsuite/320x240.ogg'},
      {name: 'Red Clara', location: 'Miami', url: 'http://v2v.cc/~j/theora_testsuite/320x240.ogg'},
      {name: 'NCTU', location: 'Taiwan', url: 'http://v2v.cc/~j/theora_testsuite/320x240.ogg'}
    ];

  })
  .directive('html5vfix', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            attr.$set('src', attr.vsrc);
        }
    }
  });
})(); 