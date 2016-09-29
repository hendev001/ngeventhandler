/// <reference path="angular.min.js" />


var myApp = angular
            .module("myModule", [])
             .controller("myController", function ($scope) {


                 var technologies = [


                     { name: "C#", likes: 0, dislikes: 20 },
                       { name: "Java", likes: 0, dislikes: 20 },
                         { name: "SQL", likes: 0, dislikes: 20 },
                           { name: "C++", likes: 0, dislikes: 20 },
                             { name: "ASP.NET", likes: 0, dislikes: 20 },

                 ];

                 $scope.technologies = technologies;

                 $scope.incrementlikes = function (technology) {
                     technology.likes++;
                 }
             
                 $scope.decrementdislikes = function (technology) {
                     technology.dislikes--;
                 }
             });