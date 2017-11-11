function onChangeTab(event){
  var tabElement = event.target.id;
  var descElementId = tabElement.replace('Tab', 'Desc');
  Array.from(document.getElementsByClassName('tabs')).forEach((item)=>{item.classList.remove('tab-underline')});
  Array.from(document.getElementsByClassName('tabdesc')).forEach((item)=>{item.classList.remove('display-block')});
  document.getElementById(tabElement).classList.add('tab-underline');
  document.getElementById(descElementId).classList.add('display-block');
}

function fetchFieldValues(){
    var form = document.getElementById('contactForm');
    var fname = form.elements.firstname.value;
    var lname = form.elements.lastname.value;
    var subject = form.elements.subject.value;
    var mail = form.elements.email.value;
    var msg = form.elements.message.value;
    var queryObj = {firstName : fname, lastName: lname, subject: subject, mail: mail, msg: msg};
    apihit(queryObj);
}

function apihit(queryObj){
  axios.post('/sendmail', queryObj)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
};
