'use strict';

app.controller('portalCtrl', ['$scope', 'GoogleSpreadsheets', function($scope, GoogleSpreadsheets){

    var name = localStorage.getItem("lastname");

    $scope.title = 'Welcome to the Portal , ' + name;




var parse = function(entry) {
      var category = entry['gsx$category']['$t'];
      var description = entry['gsx$description']['$t'];
      var title = entry['gsx$title']['$t'];
      var url = entry['gsx$url']['$t'];
      var yo = entry['gsx$yo']['$t'];
      return {
        category: category,
        description: description,
        title: title,
        url: url,
        yo: yo
      };
    }


    var people = [];


    GoogleSpreadsheets.getData().then(function(response){
     var entries = response['feed']['entry'];
      entries.forEach(function(data) {
        console.log(data.gsx$person.$t);
      });
    })



}]);
