angular.module('helpdesk', [
    'helpdesk.factories',
    'contact.factories',
    'helpdesk.open',
    'helpdesk.archive',
    'product.add',
    'product.cart',
    'product.checked-out',
    'ngRoute'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './open/open.html',
                controller: 'OpenController'
            })
            .when('/open', {
                templateUrl: './open/open.html',
                controller: 'OpenController'
            })
            .when('/archive', {
                templateUrl: './archive/archive.html',
                controller: 'ArchiveController'
            })
            .when('/product', {
                templateUrl: './product/add.html',
                controller: 'AddController'
            })
            .when('/cart', {
                templateUrl: './cart/cart.html',
                controller: 'CartController'
            })
            .when('/checked-out', {
                templateUrl: './cart/checked-out.html',
                controller: 'CheckedOutController'
            })
            .otherwise({
                redirectTo: '/open'
            });
    });
