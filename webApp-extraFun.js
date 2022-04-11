function staticUrl(){
  let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://syntaxdb.com/api/v1/languages/javascript/categories');
xhr.send();
xhr.onload = function () {
  addItemsToDOM(JSON.parse(xhr.response));
};
}
/**xhr.onerror = function () {
  // alert("cannot send a request");k
};
https://syntaxdb.com/api/v1/languages/javascript/categories/33/concepts
*/
function addItemsToDOM(categories) {
  var arr=["category_name","category_search","language_permalink"]
  var outarr;
  for(let i=0;i<arr.length;i++){
  linebreak = document.createElement('br');
  var container = document.querySelector('.categories');
  categories.forEach((category) => {
    var elem = document.createElement('div');
    elem.setAttribute('class', 'test');
    elem.setAttribute('style', 'display="none"');
    elem.setAttribute('style', 'background-color="red"');
    elem.textContent = category[arr[i]];
    container.appendChild(elem);
    container.appendChild(linebreak);

   
   
  outarr=container;
  });

}
var objArr=document.querySelector('.contents');
var obj=Object.values(outarr);
  objArr.appendChild(obj);
  objArr.appendChild(linebreak);
}


















var idSelected="";
function dynamicUrl(idSelected){
  let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://syntaxdb.com/api/v1/languages/javascript/categories/'+idSelected+'/concepts');
xhr.send();
xhr.onload = function () {
  addExtraItemsToDOM(JSON.parse(xhr.response));
};
}
function addExtraItemsToDOM(concepts) {
  var container = document.querySelector('.contents');
  concepts.forEach((concept) => {
    var elem = document.createElement('div');
    elem.setAttribute('class', 'test');
    elem.setAttribute('style', 'display="none"');
    elem.textContent = concept["concept_name"]+"---------"+concept["concepts_search"];
    container.appendChild(elem);
  });
}


/*function setAttributeItem(item,value){
  elem.setAttribute('class', 'test');
}*/

//dynamicUrl();
staticUrl();