var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html",
        controller : "mainCtrl",
        activetab: 'main',
    })
    .when("/machine", {
        templateUrl : "machine.html",
        controller : "machineCtrl",
        activetab: 'machine',
    })
    .when("/token", {
        templateUrl : "token.html",
        controller : "tokenCtrl",
        activetab: 'token',
    })
    .when("/about", {
        templateUrl : "about.html",
        controller : "aboutCtrl",
        activetab: 'about',
    });

});


var currentLanguage = localStorage.getItem('language');

if( currentLanguage == null ){
    localStorage.setItem('language', 'ch');
}

if( localStorage.getItem('reload') == null ){
    localStorage.setItem('reload', true);
    location.reload();
}

app.controller("menuCtrl", function ($scope, $route) {
    $scope.$route = $route;

    $scope.currentLanguage = currentLanguage;

    $('#language-menu a').click(function(){
        let lang = $(this).attr('language');
        localStorage.removeItem('language');
        localStorage.setItem('language', lang);
        $scope.currentLanguage = lang;
        location.reload();
    });

});


app.controller("mainCtrl", function ($scope, $route) {
    $scope.$route = $route;

    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">0' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $("body").attr('id', 'home');
    // countdown
    $("#date-countdown").countdown("2018/06/16", function(event) {
        if( currentLanguage == 'ch'){
            $(this).html(
                event.strftime('<span>%D</span>天 <span>%H</span>时 <span>%M</span>分 <span>%S</span>秒')
            );
        }
        if( currentLanguage == 'en'){
            $(this).html(
                event.strftime('<span>%D</span>D <span>%H</span>H <span>%M</span>M <span>%S</span>S')
            );
        }

    });
    
    // 
    let deltatempDown = 0;
    let deltatempUp = 0;
    var countToScroll = 3;
    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', 
        function(event) {
        delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
        if (delta >= 0) {
            deltatempUp++;
            deltatempDown = 0;
            if( deltatempUp == countToScroll ){
                swiper.slidePrev(600);
                deltatempUp = 0;
            }
        } else {
            deltatempDown++;
            deltatempUp = 0;
            if( deltatempDown == countToScroll ){
                swiper.slideNext(600);
                deltatempDown = 0;
            }
        }
    });

    $('.ecosystem-item').click(function(){
        $('.ecosystem-item').removeClass('active');
        $(this).addClass('active');
        let indexEcosystem = $(this).index() + 1;
        $('.tab-show p').hide();
        console.log(  $('.tab-show p') );
        $('.tab-show p:nth-child(' + indexEcosystem + ')').show();
    });
});

app.controller("machineCtrl", function ($scope, $route) {
    $scope.$route = $route;
    $("body").attr('id', '');
});

app.controller("tokenCtrl", function ($scope, $route) {
    $scope.$route = $route;
    $("body").attr('id', '');
});

app.controller("aboutCtrl", function ($scope, $route) {
    $scope.$route = $route;
    $("body").attr('id', '');
});



