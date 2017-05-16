var app = angular.module('qFacts');

app.controller('foot', function($scope, service){
$scope.fact=[];
$scope.playAudio = function() {
     var audio = new Audio('neverKnew.wav');
     audio.play();
 };
  console.log('hello');
$scope.go = function(){
$scope.playAudio();
  service.getFact().then(function(){
    $scope.fact= service.factStuff();
    console.log($scope.fact);
  });

}

});
