import axios from 'axios';
import {projectList} from './data.js';
import '../styles/main.scss';
import mainCtrl from './mainController.js';

var app = angular.module('myApp', ["ngRoute"]);
app.controller('mainCtrl', mainCtrl);

app.config(function($routeProvider){
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
});

// function onChangeTab(event){
//     var tabElement = event.target.id;
//     var descElementId = tabElement.replace('Tab', 'Desc');
//     hideResponseElements();
//     Array.from(document.getElementsByClassName('tabs')).forEach((item)=>{item.classList.remove('tab-underline')});
//     Array.from(document.getElementsByClassName('tabdesc')).forEach((item)=>{item.classList.remove('display-block')});
//     document.getElementById(tabElement).classList.add('tab-underline');
//     document.getElementById(descElementId).classList.add('display-block');
//     var optionElement = document.getElementById('optionBlock');
//     if(optionElement.classList.contains('display-block')){
//       optionElement.classList.remove('option-animation');
//       optionElement.classList.add('option-hide-animation');
//       setTimeout(function(){document.getElementById('optionBlock').classList.remove('display-block', 'option-hide-animation')}, 1000);
//     }
//     // if(window.screen.height < 641){
//     //     animateScrollDown();
//     // }
//   }
  function animateScrollDown(){
    var scrollToTop = window.setInterval(function() {
        var pos = document.getElementById('contentDisplay').offsetTop;
        if ( pos > window.pageYOffset + 25 ) {
            window.scrollTo( 0, window.pageYOffset + 10 );
        } else {
            window.clearInterval( scrollToTop );
        }
    }, 16);
  }
  function animateScrollup(){
    var scrollToBottom = window.setInterval(function() {
        var pos = document.getElementById('leftPart').offsetTop;
        if ( pos < window.pageYOffset ) {
            window.scrollTo( 0, window.pageYOffset - 10 );
        } else {
            window.clearInterval( scrollToBottom );
        }
    }, 16);
  }
  function clearTheForm(){
    var requiredElement = document.getElementById('requiredFiledAlert');
    var firstNameEle = document.getElementById('firstName');
    var subjectEle = document.getElementById('subject');
    var mailEle = document.getElementById('email');
    var msgElement = document.getElementById('message');
    if(requiredElement.classList.contains('display-inline-block')){
      requiredElement.classList.remove('display-inline-block');
    }
    if(firstNameEle.classList.contains('field-error-class')){
        firstNameEle.classList.remove('field-error-class');
    }
    if(subjectEle.classList.contains('field-error-class')){
        subjectEle.classList.remove('field-error-class');
    }
    if(mailEle.classList.contains('field-error-class')){
        mailEle.classList.remove('field-error-class');
    }
    if(msgElement.classList.contains('field-error-class')){
        msgElement.classList.remove('field-error-class');
    }
    document.getElementById('contactForm').reset();
  }
  function hideResponseElements(){
    var SEle = document.getElementById('submitSuccess');
    var EEle = document.getElementById('submitFailed');
    if( SEle.classList.contains("display-inline-block") ){
        SEle.classList.remove('display-inline-block');
    } else if( EEle.classList.contains("display-inline-block") ){
      EEle.classList.remove('display-inline-block');
    }
  }
  function fetchFieldValues(){
      hideResponseElements();
      var form = document.getElementById('contactForm');
      var fname = form.elements.firstname.value;
      var lname = form.elements.lastname.value;
      var subject = form.elements.subject.value;
      var mail = form.elements.email.value;
      var msg = form.elements.message.value;
      var validFname = false;
      var validSubject = false;
      var validMail = false;
      var validMessage = false;
      var queryObj = {firstName : fname, lastName: lname, subject: subject, mail: mail, msg: msg};
      validFname = validateFname(fname);
      validSubject = validateSubject(subject);
      validMail = validateMail(mail);
      validMessage = validateMessage(msg);
      var requiredElement = document.getElementById('requiredFiledAlert');
      if(validFname && validSubject && validMail && validMessage){
        if(requiredElement.classList.contains('display-inline-block')){
          requiredElement.classList.remove('display-inline-block');
        }
        apihit(queryObj);
      }
      else {
        requiredElement.classList.add('display-inline-block');
      }
  }
  function validateMessage(msg){
    var msgElement = document.getElementById('message');
    if(validateFiled(msg)){
        if(msgElement.classList.contains('field-error-class')){
            msgElement.classList.remove('field-error-class');
        }
        return true;
    }
    else {
        msgElement.classList.add('field-error-class');
        return false;
    }
  }
  
  function validateFname(fname){
    var firstNameEle = document.getElementById('firstName');
    if(validateFiled(fname)){
        if(firstNameEle.classList.contains('field-error-class')){
            firstNameEle.classList.remove('field-error-class');
        }
        return true;
    }
    else {
        firstNameEle.classList.add('field-error-class');
        return false;
    }
  }
  
  function validateSubject(subject){
    var subjectEle = document.getElementById('subject');
    if(validateFiled(subject)){
        if(subjectEle.classList.contains('field-error-class')){
            subjectEle.classList.remove('field-error-class');
        }
        return true;
    }
    else {
        subjectEle.classList.add('field-error-class');
        return false;
    }
  }
  function validateMail(mail){
    var mailEle = document.getElementById('email');
    if(validateFiled(mail)){
        if(mailEle.classList.contains('field-error-class')){
            mailEle.classList.remove('field-error-class');
        }
        return true;
    }
    else {
        mailEle.classList.add('field-error-class');
        return false;
    }
  }
  
  function validateFiled(value){
    return value !== "";
  }
  function apihit(queryObj){
    axios.post('/sendmail', queryObj)
  .then(function (response) {
    var successElement = document.getElementById('submitSuccess');
    successElement.innerHTML = response.data;
    successElement.classList.add('display-inline-block');
    clearTheForm();
  })
  .catch(function (error) {
    var EEle = document.getElementById('submitFailed');
    var errMsg = "Please try again later!!!. ";
    EEle.innerHTML = errMsg + error.Error;
    EEle.classList.add('display-inline-block');
  });
  };
  function hideShowMenu(){
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
  
  var scrollUpEvent = window.addEventListener('scroll',function(){
      if(window.pageYOffset>350){
        document.getElementById('scrollUpIcon').classList.add('display-inline-block');
      }
      if(window.pageYOffset<350){
        document.getElementById('scrollUpIcon').classList.remove('display-inline-block');
      }
  });
  
  function getGreetingWish(){
    var today =  new Date();
    if(today.getHours() < 12 ){
      document.getElementById('wishes').innerHTML = "Good Morning";
    }
    else if(today.getHours() >= 12 && today.getHours() < 16){
      document.getElementById('wishes').innerHTML = "Good Afternoon";
    }
    else if(today.getHours() >= 16 && today.getHours() < 24){
      document.getElementById('wishes').innerHTML = "Good Evening";
    }
  }