import data from './data';
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