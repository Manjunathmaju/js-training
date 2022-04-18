let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://syntaxdb.com/api/v1/languages/javascript/categories');
xhr.send();
xhr.onload = function () {
  addItemsToDOM(JSON.parse(xhr.response));
};
function addItemsToDOM(categories) {
  let arr=[],j=0;
  var previousClickId=99;
    let k=0;
    linebreak = document.createElement('br');
    var container = document.querySelector('.categories');
    categories.forEach((category) => {
      arr.push(category["id"]);
      var elem = document.createElement('div');
      elem.setAttribute('id', `test${k}`);
      k += 1;
      elem.setAttribute('style', 'display="none"');
      elem.setAttribute('style', 'background-color="red"');
      elem.textContent = category["category_name"];
      container.appendChild(elem);
      container.appendChild(linebreak);
    });

    // function removeContent(){
    //   document.getElementById('removetext').innerHTML="";
    // }
   
    for(let i=0;i<arr.length;i++){
      document.getElementById(`test${i}`).addEventListener("click",function(){
                                                                      if(previousClickId != arr[i]){
                                                                        //removeContent();
                                                                        document.getElementById('removetext').innerHTML="";
                                                                        dynamicUrl(i);
                                                                      }
                                                                    });
    }


    function dynamicUrl(eve){
      let xhr = new XMLHttpRequest();
   console.log(arr[eve]);
      xhr.open('GET', `https://syntaxdb.com/api/v1/languages/javascript/categories/${arr[eve]}/concepts`);
      xhr.send();
      previousClickId=arr[eve];
      xhr.onload = function () {
        addExtraItemsToDOM(JSON.parse(xhr.response));
      };
    }
    function addExtraItemsToDOM(concepts) {
      let container = document.querySelector('.categories-id');
      concepts.forEach((concept) => {
        let elem = document.createElement('div');
        elem.setAttribute('id', `intest${j}`);
        j += 1;
        elem.setAttribute('style', 'display="none"');
        elem.textContent = concept["concept_name"];
        container.appendChild(elem);
      });
  }
 
}

