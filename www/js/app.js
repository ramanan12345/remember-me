// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('mainApp', ['ionic', 'mainApp.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function ($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'tabs.html'
    })
    .state('tabs.home', {
      url: '/home',
      views: {
        'tab-home': {
       templateUrl: 'templates/tab-home.html',
      controller: 'homeCtrl' 
          }
        }
    })
    .state('tabs.notes', {
      url: '/notes',
      views: {
        'tab-note': {
        templateUrl: 'templates/tab-notes.html',
        controller: 'notesCtrl'
        }
      } 
        
    })
    .state('tabs.pictures', {
      url: '/pictures',
      views: {
        'tab-pictures': {
        templateUrl: 'templates/tab-pictures.html',
        controller: 'picturesCtrl'  
        }
      }
      
    }).
    state('tabs.messages', {
      url: '/messages',
      views : {
        'tab-messages': {
      templateUrl: 'templates/tab-messages.html',
      controller: 'messagesCtrl' 
        }  
      }
    });
    $urlRouterProvider.otherwise('/tab/home');
})
