
let arr=[],j=0;
//function staticUrl(){
  let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://syntaxdb.com/api/v1/languages/javascript/categories');
xhr.send();
xhr.onload = function () {
  addItemsToDOM(JSON.parse(xhr.response));
};
//}
/**xhr.onerror = function () {
  // alert("cannot send a request");k
};
https://syntaxdb.com/api/v1/languages/javascript/categories/33/concepts
*/
function addItemsToDOM(categories) {
  var arr1=["category_name","category_search","language_permalink"]
  //var outarr;
  //for(let i=0;i<arr.length;i++){
    let k=0;
    linebreak = document.createElement('br');
    var container = document.querySelector('.categories');
    categories.forEach((category) => {
      arr.push(category["id"]);
      //alert(arr); 
      var elem = document.createElement('div');
      // const appdiv=document.getElementById('extended');
      // appdiv.innerHTML=`<h1>inner demo html here!!</h1>`
      // appdiv.innerHTML=`<h2>inner demo html here!!</h2>`
      elem.setAttribute('id', `test${k}`,'class','divtest');
      k += 1;
      elem.setAttribute('style', 'display="none"');
      elem.setAttribute('style', 'background-color="red"');
      //elem.textContent = category[arr[i]];
      elem.textContent = category["category_name"];
      container.appendChild(elem);
      //outarr=container;
      //container.appendChild("expand");
      container.appendChild(linebreak);
    });
    // ------------ FROM HERE AddEventListener METHOD FUNCTION CODE------------------
    //var idSelected=33;
    let eventid=0;
    for(let i=0;i<arr.length;i++){
      document.getElementById(`test${i}`).addEventListener("click",dynamicUrl);
     
    
     eventid=i;
    }
    function removeContent(){
      document.getElementById('removetext').innerHTML="";
    }

      // function myFunction(){
      //   document.getElementById("divide").innerHTML="you clicked me!";
      // }

    //------------- THIS FUNCTIION "PRINT THE CONTENTS " WHEN USER CLICK---------
    function dynamicUrl(){
      let xhr = new XMLHttpRequest();
      xhr.open('GET', `https://syntaxdb.com/api/v1/languages/javascript/categories/${arr[eventid]}/concepts`);
      xhr.send();
      xhr.onload = function () {
        addExtraItemsToDOM(JSON.parse(xhr.response));
      };
   
    }
    function addExtraItemsToDOM(concepts) {
      //let container = document.querySelector('.contents');
      let container = document.querySelector('.categories-id');
      concepts.forEach((concept) => {
        let elem = document.createElement('div');
        elem.setAttribute('id', `intest${j}`);
        j += 1;
        elem.setAttribute('style', 'display="none"');
        elem.textContent = `concept-name : `+concept["concept_name"]+` , concept_search : `+concept["concept_search"];
        container.appendChild(elem);
      });
      document.getElementById('removetext').addEventListener("click",removeContent);
  }
}


//------------- THIS FUNCTIION "PRINT ONLY ID OF CATEGORYS" WHEN USER CLICK---------
  //   function staticUrlcopy(){
  //     let xhr = new XMLHttpRequest();
  //   xhr.open('GET', 'https://syntaxdb.com/api/v1/languages/javascript/categories');
  //   xhr.send();
  //   xhr.onload = function () {
  //     addIdToDOM(JSON.parse(xhr.response));
  //   };
  //   }
  //   function addIdToDOM(categories) {
  //     var container = document.querySelector('.categories-id');
  //     categories.forEach((category) => {
  //       var elem = document.createElement('div');
  //       elem.setAttribute('class', 'test');
  //       elem.setAttribute('style', 'display="none"');
  //       elem.textContent = category["id"];
  //       container.appendChild(elem);   
  //     });
    
  //   }
  // }

// ----------- JUST TRYED TO CONVERT OBJECT TO ARRAY----------------

// var objArr=document.querySelector('.contents');
// var obj=Object.values(outarr);
//   objArr.appendChild(obj);
//   objArr.appendChild(linebreak);
//}

//----------------------------------------------------------




//----------------BY SIR -TO MAKE SEPERATE OR OWN FUNCTION ------------------

/*function setAttributeItem(item,value){
elem.setAttribute('class', 'test');
}*/



//---------- THIS IS AddEventListener METHOD BUT NOT WORKING---------------

// function clickMe(){
//   document.getElementById("extended").addEventListener("click",staticUrlcopy);
//   function staticUrlcopy(){
//     let xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://syntaxdb.com/api/v1/languages/javascript/categories');
//   xhr.send();
//   xhr.onload = function () {
//     addIdToDOM(JSON.parse(xhr.response));
//   };
//   }
//   function addIdToDOM(categories) {
//     var container = document.querySelector('.categories-id');
//     categories.forEach((category) => {
//       var elem = document.createElement('div');
//       elem.setAttribute('class', 'test');
//       elem.setAttribute('style', 'display="none"');
//       elem.textContent = category["id"];
//       container.appendChild(elem);   
//     });

//   }
// }
//staticUrl();

//dynamicUrl(idSelected);
//clickMe();

/**
document.getElementById("divide").addEventListener("click",myFunction);
function myFunction(){
document.getElementById("divide").innerHTML="you clicked me!";
}
*/
