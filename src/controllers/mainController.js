export class MainController {
    constructor($scope) {
        $scope.flowersMap = new Map(JSON.parse(localStorage.getItem('myMap'))) || new Map();
        this.showDetails = false;
        console.log($scope.flowersMap);

        $scope.addFlower = function (key, object) {
            $scope.flowersMap.set(key, object);
            localStorage.myMap = JSON.stringify(Array.from($scope.flowersMap.entries()));
        };

        $scope.removeFlower = function (key) {
            $scope.flowersMap.delete(key);
            localStorage.myMap = JSON.stringify(Array.from($scope.flowersMap.entries()));
        };
    }
}