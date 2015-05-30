app.service('Config', ['$http', function($http){
    this.getConfig = function getConfig() {
        var promise = $http.get("https://api.myjson.com/bins/53wwl").then(function(response) {
            return response.data;
        });
        return promise;
    };
}])