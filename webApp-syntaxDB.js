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
    document.getElementById(`intest${j}`).style.border='1px solid black';
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
    elem.setAttribute('id', `intrest${j}`);
    elem.setAttribute('style', 'display="none"');
    elem.textContent = concepts[a[j]];
    container.appendChild(elem);

    document.getElementById(`intrest${j}`).style.border='1px solid black';
    j += 1;   
   }
  // });
  getCategories();

  // let container = document.querySelector('.rightDiv');
  // let j=0;
  // concepts.forEach((concept) => {
  //   let elem = document.createElement('div');
  //   elem.setAttribute('id', `intrest${j}`);
  //   elem.setAttribute('style', 'display="none"');
  //   elem.textContent = concept["concept_search"];
  //   container.appendChild(elem);
  //   document.getElementById(`intrest${j}`).style.border='1px solid black';
  //   j += 1;
  // });

}
// function rightDivFun(ar1,ar2,j){
//   let container2=document.querySelector('.rightDiv');
//                       let rightElement1=document.createElement('div');
//                       let rightElement2=document.createElement('div');

//                     rightElement1.setAttribute('class','subPartOfRightDiv');
//                     rightElement2.setAttribute('class','subPartOfRightDiv');
//                     // let rightElement3=document.createElement('div');
//                     // rightElement3.setAttribute('class','subPartOfRightDiv');
//                     // let rightElement4=document.createElement('div');
//                     // rightElement4.setAttribute('class','subPartOfRightDiv');
//                     // let rightElement5=document.createElement('div');
//                     // rightElement5.setAttribute('class','subPartOfRightDiv');

//                       rightElement1.textContent=ar1[j];
//                       rightElement2.textContent=ar2[j];

//                       container2.appendChild(rightElement1);
//                       container2.appendChild(rightElement2);

                      // rightElement3.textContent=ar3[j];
                      // container2.appendChild(rightElement3);

                      // rightElement4.textContent=ar4[j];
                      // container2.appendChild(rightElement4);

                      // rightElement5.textContent=ar5[j];
                      // container2.appendChild(rightElement5);
                      



 
    

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://syntaxdb.com/api/v1/languages/javascript/categories');
// xhr.send();
// xhr.onload = function () {
//   addItemsToDOM(JSON.parse(xhr.response));
// };
// function addItemsToDOM(categories) {
//   let arr=[],j=0;
//   var previousClickId=99;
//     let k=0;
//     linebreak = document.createElement('br');
//     var container = document.querySelector('.categories');
//     categories.forEach((category) => {
//       arr.push(category["id"]);
//       var elem = document.createElement('div');
//       elem.setAttribute('id', `test${k}`);
//       k += 1;
//       elem.setAttribute('style', 'display="none"');
//       elem.setAttribute('style', 'background-color="red"');
//       elem.textContent = category["category_name"];
//       container.appendChild(elem);
//       container.appendChild(linebreak);
//     });

//     // function removeContent(){
//     //   document.getElementById('removetext').innerHTML="";
//     // }
   
//     for(let i=0;i<arr.length;i++){
//       document.getElementById(`test${i}`).addEventListener("click",function(){
//                                                                       if(previousClickId != arr[i]){
//                                                                         //removeContent();
//                                                                         document.getElementById('removetext').innerHTML="";
//                                                                         dynamicUrl(i);
//                                                                       }
//                                                                     });
//     }


//     function dynamicUrl(eve){
//       let xhr = new XMLHttpRequest();
//    console.log(arr[eve]);
//       xhr.open('GET', `https://syntaxdb.com/api/v1/languages/javascript/categories/${arr[eve]}/concepts`);
//       xhr.send();
//       previousClickId=arr[eve];
//       xhr.onload = function () {
//         addExtraItemsToDOM(JSON.parse(xhr.response));
//       };
//     }
//     function addExtraItemsToDOM(concepts) {
//       let container = document.querySelector('.categories-id');
//       concepts.forEach((concept) => {
//         let elem = document.createElement('div');
//         elem.setAttribute('id', `intest${j}`);
//         j += 1;
//         elem.setAttribute('style', 'display="none"');
//         elem.textContent = concept["concept_name"];
//         container.appendChild(elem);
//       });
//   }
 
// }

