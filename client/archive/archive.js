angular.module('helpdesk.archive', [])

    .controller('ArchiveController', function ($scope, $location, $route, Tickets) {
        $scope.data = {};

        $scope.getTickets = function() {
            Tickets.getArchive()
                .then(function(archivedTickets) {
                    console.log('ArchiveController.getTickets.archivedTickets : ', JSON.stringify(archivedTickets));
                    $scope.data.tickets = archivedTickets;
                    console.log('ArchiveController.getTickets.$scope.data.tickets : ', JSON.stringify($scope.data.tickets));
                })
                .catch(function(error) {
                    console.error(error);
                });
        };


        $scope.getTickets();

        $scope.openTicket = function(ticket) {
            Tickets.updateTicket(ticket)
                .then(function() {
                    $route.reload();
                })
                .catch(function(error) {
                    console.error(error);
                });
        };

        $scope.deleteTicket = function(ticket) {
            Tickets.deleteTicket(ticket)
                .then(function() {
                    $route.reload();
                })
                .catch(function(error) {
                    console.error(error);
                });
        };

        $scope.name = 'ArchiveController';
    });
