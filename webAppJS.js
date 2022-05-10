

function getConnectionToServer(URL, callBack) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", URL);
    xhr.send();
    xhr.onload = function () {
      callBack(JSON.parse(xhr.response));
    }
}
  
function getCategories() {
    let categoriesUrl ="https://syntaxdb.com/api/v1/languages/javascript/categories";
    getConnectionToServer(categoriesUrl, addCategoriesItemsToDOM);
}

function onclickFunction(concept_id,bool) {
    if(bool){
        conceptUrlDynamic = `https://syntaxdb.com/api/v1/languages/javascript/categories/${concept_id}/concepts`;
        getConnectionToServer(conceptUrlDynamic,addExtraItemsToDOM);
    }else{
        rightDivUriDynamic=`https://syntaxdb.com/api/v1/concepts/${concept_id}`;
        getConnectionToServer(rightDivUriDynamic,addDetailsToDom);
    }
}
  
function addCategoriesItemsToDOM(categories) {
let arr=[];
let k=0;
var container = document.querySelector('.categories');
categories.forEach((category) => {
  arr.push(category["id"]);
  var elem = document.createElement('ol');
  elem.setAttribute('id', `test${k}`);  
  elem.setAttribute('style', 'display="none"');
  elem.setAttribute('style', 'background-color="red"');
  elem.textContent = category["category_name"];
  container.appendChild(elem);
  document.getElementById(`test${k}`).style.border='1px solid red';
  document.getElementById(`test${k}`).style.padding= '10px';
  k += 1;
});
funIdGoToOnclick(arr,true);
}

function funIdGoToOnclick(arr,bool){ 
if(bool){
if(bool){
  var array=arr;
  var previousClickId=99;
}
for(let i=0;i<arr.length;i++){
document.getElementById(`test${i}`).addEventListener(
  "click",function(){
            if( previousClickId != array[i]){
              previousClickId=array[i];
              document.getElementById('removetext').innerHTML="";
              document.getElementById('removeRightDiv').innerHTML="";
              onclickFunction(array[i],true);
            }
            });
         
}
}
if(!bool){
let repet=false;
let previousClickId=99;
for(let i=0;i<arr.length;i++){
  document.getElementById(`intest${i}`).addEventListener(
    "click",function(){
      // console.log(repet);
      if(repet){
        document.getElementById('removeRightDiv').innerHTML="";
      }
        if(repet==false || previousClickId != 99){
          previousClickId=i;
          repet=true;
          onclickFunction(arr[i],false);
        }                
    });
}
}
}

function addExtraItemsToDOM(concepts) {
let container = document.querySelector('.categories-id');
let j=0,arr=[];
concepts.forEach((concept) => {
  arr.push(concept["id"]);
  let elem = document.createElement('li');
  elem.setAttribute('id', `intest${j}`);
  elem.setAttribute('style', 'display="none"');
  elem.textContent = concept["concept_name"];
  container.appendChild(elem);
//   document.getElementById(`intest${j}`).style.border='1px solid black';
  j += 1;
});
funIdGoToOnclick(arr,false);
}


function addDetailsToDom(concepts){


let a=["concept_search","description","syntax","notes","example"],j=0;
let container = document.querySelector('.rightDiv');
// concepts.forEach((concept) => {
  for(let i=0;i<a.length;i++){
  let elem = document.createElement('li');
  let brek = document.createElement('br');
  elem.setAttribute('id', `intrest${j}`);
  elem.setAttribute('style', 'display="none"');
  elem.textContent=`${a[i]} :  ${concepts[a[j]]}`;
  container.appendChild(elem);
container.appendChild(brek);
//   document.getElementById(`intrest${j}`).style.border='1px solid black';
  j += 1;   
 }
// });
}
getCategories();
