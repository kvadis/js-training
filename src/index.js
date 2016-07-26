"use strict";

import * as angular from 'angular';
import {MainController} from './controllers/mainController';
// import {FlowerSubmitController} from './controllers/flowerSubmit';

let app = angular.module('WateringApp', []);
app.controller('MainController', MainController);
app.controller('FlowerSubmitController', ['$scope', 'Flower', function ($scope, Flower) {
    $scope.flwr_watering_date = '';
    $scope.flwr_interval = '';
    $scope.flwr_name = '';
    //
    $scope.submit = function () {
        if ($scope.flwr_name) {
            $scope.addFlower(
                this.flwr_name,
                new Flower(this.flwr_name, this.flwr_interval, this.flwr_watering_date));
        }
    };
    $scope.remove = function (name) {
        $scope.removeFlower(name);
    };
    $scope.$parent.showDetails = false;
}]);
app.factory('Flower', function () {
    function Flower(name, wateringInterval, lastWateringDate) {
        // Public properties, assigned to the instance ('this')
        this.name = name;
        this.wateringInterval = wateringInterval;
        this.lastWateringTime = lastWateringDate;
    }

    Flower.prototype.water = function () {
        this.lastWateringTime = new Date();
        alert("Flower \"" + this.name + "\" has been watered");
    };
    Flower.createInstance = function (data) {
        return new User(
            data.name,
            data.watering_interval,
            data.last_watering_date
        );
    };
    return Flower;
});
app.filter('mapToArray', function () {
    return function (strMap, addKey) {
        let obj = Object.create(null);
        if (strMap && strMap.size > 0) {
            for (let [k,v] of strMap) {
                obj[k] = v;
            }
            console.log(obj);
        }
        if (addKey === false) {
            return Object.values(obj);
            return obj;
        } else {
            return Object.keys(obj).map(function (key) {
                return Object.defineProperty(obj[key], '$key', {enumerable: false, value: key});
            });
        }
    };
});
