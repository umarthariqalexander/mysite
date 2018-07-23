import {projectList} from './data.js';
import '../styles/main.scss';
import mainCtrl from './mainController.js';

var app = angular.module('myApp', ["ngRoute"]);
app.controller('mainCtrl', ['$scope', '$location', '$http', mainCtrl]);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl: "./views/projectdesc.htm"
  })
  .when("/tech", {
    templateUrl: "./views/technologydesc.htm"
  })
  .when("/about", {
    templateUrl: "./views/about.htm"
  })
  .when("/contact", {
    templateUrl: "./views/contact.htm"
  })
}]);

  
var scrollUpEvent = window.addEventListener('scroll',function(){
    if(window.pageYOffset>350){
      document.getElementById('scrollUpIcon').classList.add('display-inline-block');
    }
    if(window.pageYOffset<350){
      document.getElementById('scrollUpIcon').classList.remove('display-inline-block');
    }
});
  