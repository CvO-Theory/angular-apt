angular.module("apt", [])
.value("serverEndpoint", "http://angular-apt.azurewebsites.net/api/")
.service("apt", ["$http", "serverEndpoint", function apt($http, serverEndpoint) {
    this.getCoverabilityGraph = function(pn) {
        return $http.post(serverEndpoint + "coverabilityGraph", {pn: aptCode})
    }

    this.getSynthesizedNet = function(lts, options) {
        return $http.post(serverEndpoint + "coverabilityGraph", {lts: lts, options: options})
    }
}]);