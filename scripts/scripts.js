function onChangeTab(event){
  var tabElement = event.target.id;
  var descElementId = tabElement.replace('Tab', 'Desc');
  Array.from(document.getElementsByClassName('tabs')).forEach((item)=>{item.classList.remove('tab-underline')});
  Array.from(document.getElementsByClassName('tabdesc')).forEach((item)=>{item.classList.remove('display-block')});
  document.getElementById(tabElement).classList.add('tab-underline');
  document.getElementById(descElementId).classList.add('display-block');

}
