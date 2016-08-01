export class MainController {
    constructor($scope, $translate, Flower) {
        $scope.showDetails = false;
        $scope.currentLanguage = 'ru';
        $scope.orderByField = 'lastWateringDate';
        // $scope.reverseSort = 'false';
        $scope.reverseSort = false;
        $scope.flowersMap = new Map(JSON.parse(localStorage.getItem('myMap'))) || new Map();

        $scope.addFlower = function (key, object) {
            $scope.flowersMap.set(key, object);
            this.persistToStorage();
        };

        $scope.removeFlower = function (key) {
            $scope.flowersMap.delete(key);
            this.persistToStorage();
        };

        $scope.waterFlower = function (flower) {
            console.log("Water!");
            // Flower.prototype.water.call(flower);
            console.log(flower);
            let obj = Object.assign(new Flower("", "",""), flower);
            obj.water();
            $scope.flowersMap.set(obj.name, obj);
            this.persistToStorage();
        };

        $scope.changeLanguage = function () {
            if ($scope.currentLanguage == 'ru'){
                $translate.use('en');
                $scope.currentLanguage = 'en';
            } else {
                $translate.use('ru');
                $scope.currentLanguage = 'ru';
            }
        };

        $scope.persistToStorage = function(){
            localStorage.myMap = JSON.stringify(Array.from($scope.flowersMap.entries()));
        }
    }
}