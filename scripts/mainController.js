import data from './data';
import articles from './articles.js';
import htmlImg from '../images/html5.png';
import cssImg from '../images/css3.png';
import jsImg from '../images/javascript_logo.png';
import reactImg from '../images/react_logo.png';
import angularImg from '../images/angular_small_logo.png';
import nodeImg from '../images/nodejs_logo.png';
import reduxImg from '../images/redux_logo.png';
import sassImg from '../images/sass_logo.png';
import webpackImg from '../images/webpack_1.png';
import sketchImg from '../images/sketch_min_logo.jpg';
import githubImg from '../images/github_logo.png';
import stashImg from '../images/stash_logo.png';
import atomImg from '../images/atom_logo.png';
import sublimeImg from '../images/sublime_logo.png';
import windowsImg from '../images/window_logo.png';
import macImg from '../images/mac_os_logo_small.png';
import linuxImg from '../images/linux_logo.png';


export default ($scope, $location, $http)=>{
    $scope.currentActiveTab = $location.path() || '/';
    $scope.projectList = data.projectList;
    $scope.articlesList = articles;
    $scope.contactFormSubmitted = false;
    var initializeContactFormValues = ()=>{
        $scope.contactForm = {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        };
        $scope.contactFormSubmitFailed = false;
        $scope.requiredFiledAlert = false;
    }
    $scope.images = {
        htmlImg,
        cssImg,
        jsImg,
        reactImg,
        angularImg,
        nodeImg,
        reduxImg,
        sassImg,
        webpackImg,
        sketchImg,
        githubImg,
        stashImg,
        atomImg,
        sublimeImg,
        windowsImg,
        macImg,
        linuxImg
    }
    initializeContactFormValues();
    $scope.form = {};
    $scope.onChangeTab = (path)=>{
        $location.url(path);
        $scope.currentActiveTab = $location.path();
        $scope.hideShowMenu();
        if(window.screen.height < 767){
        animateScrollDown();
     }
    };
    $scope.navigateToArticle = function(articleId, articleTitle){
        $location.url('/article/'+articleTitle);
    }
    var animateScrollDown = function(){
        var scrollToTop = window.setInterval(function() {
            var pos = document.getElementById('contentDisplay').offsetTop;
            if ( pos > window.pageYOffset + 25 ) {
                window.scrollTo( 0, window.pageYOffset + 10 );
            } else {
                window.clearInterval( scrollToTop );
            }
        }, 16);
    }
    $scope.animateScrollup = function(){
        var scrollToBottom = window.setInterval(function() {
            var pos = document.getElementById('leftPart').offsetTop;
            if ( pos < window.pageYOffset ) {
                window.scrollTo( 0, window.pageYOffset - 10 );
            } else {
                window.clearInterval( scrollToBottom );
            }
        }, 16);
      }
    $scope.fetchFieldValues = function(){
        $scope.form.contactForm.$submitted = true;
        $scope.contactFormSubmitted = false;
        if($scope.form.contactForm.$valid){
            $scope.requiredFiledAlert = false;
            var queryObj = {
                firstName : $scope.contactForm.firstName, 
                lastName: $scope.contactForm.lastName, 
                subject: $scope.contactForm.subject, 
                mail: $scope.contactForm.email, 
                msg: $scope.contactForm.message
            };
            apihit(queryObj);
        }
        else{
            $scope.requiredFiledAlert = true;
        }
  }
  let apihit = function (queryObj){
        $http({
            url:'/api/sendmail',
            method: "POST",
            data: {queryObj}
        })
        .then(function (response) {
            $scope.contactFormSubmitted = true;
            $scope.clearTheForm();
        }, 
        function (error) {
            $scope.contactFormSubmitFailed = true;
        });
  };
  $scope.clearTheForm = function(){
        initializeContactFormValues();
      $scope.form.contactForm.$setPristine();
      
  }
  $scope.hideShowMenu = function (){
    var element = document.getElementById('optionBlock');
    if(element.classList.contains('display-block')){
      element.classList.remove('option-animation');
      element.classList.add('option-hide-animation');
      setTimeout(function(){document.getElementById('optionBlock').classList.remove('display-block', 'option-hide-animation')}, 1000);
    }
    else{
      element.classList.add('display-block');
      element.classList.add('option-animation');
    }
  }
}