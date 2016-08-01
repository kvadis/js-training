export class FlowerController {
    constructor($scope, Flower) {
        $scope.flwr_watering_date = '';
        $scope.flwr_interval = '';
        $scope.flwr_name = '';
        //
        $scope.submit = function () {
            if ($scope.flwr_name) {
                $scope.addFlower(
                    this.flwr_name,
                    new Flower(this.flwr_name, this.flwr_interval, this.flwr_watering_date));
                //reset form values
                this.flwr_name='';
                this.flwr_interval='';
                this.flwr_watering_date='';
            }

        };

        $scope.remove = function (name) {
            $scope.removeFlower(name);
        };
    }
}