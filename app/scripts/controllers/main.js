'use strict';

/**
 * @ngdoc function
 * @name mcoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mcoApp
 */
angular.module('mcoApp')
    .controller('MainCtrl', function ($scope, $window, $anchorScroll, $location, $timeout) {
        var cuadro1 = false;
        var cuadro2 = false;
        var cuadro3 = false;
        var cuadro4 = false;
        var cuadro5 = false;
        var cuadro6 = false;
        var cuadro7 = false;
        var cuadro8 = false;
        var cuadro9 = false;
        var cuadro10 = false;
        var cuadro11 = false;
        var cuadro12 = false;
        var cuadro13 = false;
        var cuadro14 = false;
        var cuadro15 = false;
        var cuadro16 = false;
        var cuadro17 = false;
        var cuadro18 = false;
        var cuadro19 = false;
        var cuadro20 = false;
        var cuadro22 = false;
        var cuadro23 = false;
        var cuadro24 = false;
        var cuadro25 = false;
        var cuadro26 = false;
        var cuadro27 = false;



        $scope.numAleatorio = function () {
            return parseInt(Math.random() * 2) ? true : false;
        };

        $scope.numAleatorio3 = function () {


            return Math.floor(Math.random() * 3 + 1);
            var aleatorio = Math.floor(Math.random() * 3 + 1);
        }


        $scope.cuadros = function () {


            $scope.cuadro1 = true;
            $scope.cuadro2 = true;
            $scope.cuadro3 = true;
            $scope.cuadro4 = true;
            $scope.cuadro5 = true;
            $scope.cuadro6 = true;
            $scope.cuadro7 = true;
            $scope.cuadro8 = true;
            $scope.cuadro9 = true;
            $scope.cuadro10 = true;
            $scope.cuadro11 = true;
            $scope.cuadro12 = true;
            $scope.cuadro13 = true;
            $scope.cuadro14 = true;
            $scope.cuadro15 = true;
            $scope.cuadro16 = true;
            $scope.cuadro17 = true;
            $scope.cuadro18 = true;
            $scope.cuadro19 = true;
            $scope.cuadro20 = true;
            $scope.cuadro21 = true;
            $scope.cuadro22 = true;
            $scope.cuadro23 = true;
            $scope.cuadro24 = true;
            $scope.cuadro25 = true;
            $scope.cuadro26 = true;
            $scope.cuadro27 = true;

        }

        $scope.cuadrosLeave = function () {


            $scope.cuadro1 = false;
            $scope.cuadro2 = false;
            $scope.cuadro3 = false;
            $scope.cuadro4 = false;
            $scope.cuadro5 = false;
            $scope.cuadro6 = false;
            $scope.cuadro7 = false;
            $scope.cuadro8 = false;
            $scope.cuadro9 = false;
            $scope.cuadro10 = false;
            $scope.cuadro11 = false;
            $scope.cuadro12 = false;
            $scope.cuadro13 = false;
            $scope.cuadro14 = false;
            $scope.cuadro15 = false;
            $scope.cuadro16 = false;
            $scope.cuadro17 = false;
            $scope.cuadro18 = false;
            $scope.cuadro19 = false;
            $scope.cuadro20 = false;
            $scope.cuadro21 = false;
            $scope.cuadro22 = false;
            $scope.cuadro23 = false;
            $scope.cuadro24 = false;
            $scope.cuadro25 = false;
            $scope.cuadro26 = false;
            $scope.cuadro27 = false;

        };


    });