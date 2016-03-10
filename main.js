(function () {
  angular.module('onosDeployments', [])
  .controller('mainCtrl', function($scope, $http){
    
    $scope.logos = [
      'aarnet.png',
      'AMLightLogo_official_400x400.jpg',
      'ANSP_logo.jpg',
      'CKLN-logo.png',
      'CNIT.png',
      'craete-net.jpg',
      'fiualonetrans.png',
      'GARR_logo.svg',
      'geant_logo_rgb_300dpi.jpg',
      'Internet2-sm.png',
      'KREONET-logo.png',
      'NCTU_seal_3.gif',
      'onlab.png',
      'redclara-logo.jpg',
      'REUNA_bg.jpg',
      'rnp_logo_RGB-300x158.jpg',
    ];

    $scope.streamList = [
      {name: 'AARNET', location: 'Sidney', url: 'http://deployment-videos.onosproject.org/australia'},
      {name: 'AmLight/FIU', location: 'Miami', url: 'http://deployment-videos.onosproject.org/miami'},
      {name: 'GEANT/GARR', location: 'Milan (IT)', url: 'http://deployment-videos.onosproject.org/milan'},
      {name: 'GEANT/GARR', location: 'Rome (IT)', url: 'http://deployment-videos.onosproject.org/rome'},
      {name: 'KREONET/KISTI', location: 'Korea', url: 'http://deployment-videos.onosproject.org/korea'},
      {name: 'NCTU', location: 'Taiwan', url: 'http://deployment-videos.onosproject.org/taiwan'},
      {name: 'RedClara', location: 'Chile', url: 'http://deployment-videos.onosproject.org/chile'},
      {name: 'ANSP/RNP', location: 'Brazil', url: 'http://deployment-videos.onosproject.org/brazil'},
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
