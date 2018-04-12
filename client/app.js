angular.module('helpdesk', [
    'helpdesk.factories',
    'helpdesk.open',
    'helpdesk.archive',
    'product.add',
    'product.cart',
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
            .otherwise({
                redirectTo: '/open'
            });
    });
