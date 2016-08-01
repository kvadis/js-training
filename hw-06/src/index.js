"use strict";

import * as angular from 'angular';
import 'angular-translate';

import {MainController} from './controllers/mainController';
import {FlowerController} from './controllers/flowerController';
import {Flower} from "./services/Flower";
import {MapToArray} from "./filters/mapToArray"

let app = angular.module('WateringApp', ['pascalprecht.translate']);
app.factory('Flower', Flower);
app.controller('MainController', MainController, Flower);
app.controller('FlowerController', FlowerController, Flower);
app.filter('mapToArray', MapToArray);

app.config(function ($translateProvider) {
    $translateProvider.translations('en', {
        APP_NAME: 'Flower Watering Application',
        //buttons
        ADD_FLOWER: 'Add Flower',
        LANGUAGE: 'EN',
        ACTION_WATER: 'Water!',
        //table
        FLOWER_NAME: 'Flower Name',
        LAST_WATERING_DATE: 'Last watering date',
        WATERING_INTERVAL: 'Watering interval (days)'
    });
    $translateProvider.translations('ru', {
        APP_NAME: 'Приложение "Полив цветов"',
        //buttons
        ADD_FLOWER: 'Добавить цветок',
        LANGUAGE: 'RU',
        ACTION_WATER: 'Полить!',
        //table
        FLOWER_NAME: 'Название цветка',
        LAST_WATERING_DATE: 'Дата последнего полива',
        WATERING_INTERVAL: 'Частота полива (дни)'
    });
    $translateProvider.preferredLanguage('ru');
});
