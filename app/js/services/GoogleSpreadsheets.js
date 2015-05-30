app.service('GoogleSpreadsheets', ['$http', function($http){
    this.getData = function getData() {
        var promise = $http.get("https://spreadsheets.google.com/feeds/list/1AETYFwDie2ecOC2lp5kUoChSPX6IF3nITDEiRfeoZMs/od6/public/values?alt=json").then(function(response) {
            return response.data;
        });
        return promise;
    };
}])



