if (Meteor.isClient) {
    
    angular.module('myApp', []).controller('AppCtrl', AppController);

    function AppController($interval) {

        var vm = this;

        vm.message = "Hello from meteor+angular";

        vm.date = new Date();
        $interval(function () {
            vm.date = new Date();
        }, 1000)
    }
}