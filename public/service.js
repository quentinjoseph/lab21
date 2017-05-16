var app=angular.module('qFacts');

app.factory('service', function($http){
var factStuff=[];

  return {
        getFact: function(){
          var promise = $http({
            method: 'GET',
            url: '/api/random-fact'
          }).then(function goodCallBack(response){
            factStuff = response.data;

            console.log(factStuff);

          }, function(error){
            console.log('error');
          })
          return promise;
        },
        factStuff: function(){
           return factStuff;
        }


      }
});
