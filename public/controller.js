var app = angular.module('qFacts');

app.controller('foot', function($scope, service){
$scope.fact=[];
var clips =['owen1.wav','neverKnew.wav','owen2.wav','serious.wav','wow.wav'];

$scope.playAudio = function() {
  var audioClip= clips[Math.floor(Math.random()*clips.length)];
  console.log(audioClip);
     var audio = new Audio(audioClip);
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
