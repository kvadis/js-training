// export class FlowerSubmitController {
//     constructor($scope, service) {
//         $scope.flwr_watering_date = '';
//         $scope.flwr_interval = '';
//         $scope.flwr_name = '';
//         $scope.submit = function () {
//             alert("submitFlower");
//             if ($scope.flwr_name) {
//                 $scope.addFlower(
//                     this.flwr_name,
//                     new $scope.service(this.flwr_name, this.flwr_interval, this.flwr_watering_date));
//                     // $scope.Flower.createInstance(_makeData(this.flwr_name, this.flwr_interval, this.flwr_watering_date)));
//             }
//         };

        // $scope.submitFlower = function () {
        //     console.log(_makeData(this.flwr_name, this.flwr_watering_date, this.flwr_interval));
        //     if ($scope.flwr_name) {
        //         $scope.addFlower(
        //             this.flwr_name,
        //             // new $scope.Flower(this.flwr_name, this.flwr_interval, this.flwr_watering_date));
        //             $scope.Flower.createInstance(_makeData(this.flwr_name, this.flwr_watering_date, this.flwr_interval)));
        //     }
        // };
        // function _makeData(name, interval, date) {
        //     var data = {};
        //     data.name = name;
        //     data.last_watering_date = (angular.isUndefined(date)) ? new Date() : date;
        //     data.watering_interval = (angular.isUndefined(interval)) ? 7 : interval;
        //     return data;
        // }
    // }
// }