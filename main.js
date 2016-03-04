(function () {
  angular.module('onosDeployments', [])
  .controller('mainCtrl', function($scope){
    
    $scope.streamList = [
      {name: 'Don\' Recall', location: 'Brazil', url: 'http://deployment-videos.onosproject.org/milan'},
      {name: 'Red Clara', location: 'Miami', url: 'http://deployment-videos.onosproject.org/milan'},
      {name: 'NCTU', location: 'Taiwan', url: 'http://deployment-videos.onosproject.org/milan'},
      {name: 'Don\' Recall', location: 'Brazil', url: 'http://deployment-videos.onosproject.org/milan'},
      {name: 'Red Clara', location: 'Miami', url: 'http://deployment-videos.onosproject.org/milan'},
      {name: 'NCTU', location: 'Taiwan', url: 'http://deployment-videos.onosproject.org/milan'}
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