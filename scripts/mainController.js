import data from './data';
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


export default ($scope, $location)=>{
    $scope.currentActiveTab = $location.path();
    $scope.projectList = data.projectList;
    var initializeContactFormValues = ()=>{
        $scope.contactForm = {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        };
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
        $location.path(path);
        $scope.currentActiveTab = $location.path();
    };
    $scope.fetchFieldValues = function(){
    //   hideResponseElements();
        console.log($scope.form.contactForm);
        debugger;
        $scope.form.contactForm.$submitted = true;
        if($scope.form.contactForm.$valid){
            console.log('form is valid');
        }
    //   var validFname = false;
    //   var validSubject = false;
    //   var validMail = false;
    //   var validMessage = false;
    //   var queryObj = {firstName : fname, lastName: lname, subject: subject, mail: mail, msg: msg};
    //   validFname = validateFname(fname);
    //   validSubject = validateSubject(subject);
    //   validMail = validateMail(mail);
    //   validMessage = validateMessage(msg);
    //   var requiredElement = document.getElementById('requiredFiledAlert');
    //   if(validFname && validSubject && validMail && validMessage){
    //     if(requiredElement.classList.contains('display-inline-block')){
    //       requiredElement.classList.remove('display-inline-block');
    //     }
    //     apihit(queryObj);
    //   }
    //   else {
    //     requiredElement.classList.add('display-inline-block');
    //   }
  }
  $scope.clearTheForm = function(){
      $scope.form.contactForm = {};
      initializeContactFormValues();
  }
}