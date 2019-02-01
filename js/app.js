var app = angular.module('bolsilloApp',[]);

app.controller('BolsilloViewController',['$scope', function($scope) {
    $scope.usuario = {
        nombre: 'Felipe',
        apellido: 'Monterrosa'
    };

    $scope.mensaje = "Bienvenidooo";

    $scope.cambiarNombre = function(){
        $scope.usuario.nombre = 'Andres';
        $scope.usuario.apellido = 'Alarcon';
        $scope.mensaje = 'Adios';
    }
}]);
