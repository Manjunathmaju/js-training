

//function staticUrl(){
  let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://syntaxdb.com/api/v1/languages/javascript/categories');
xhr.send();
xhr.onload = function () {
  addItemsToDOM(JSON.parse(xhr.response));
};

function addItemsToDOM(categories) {
  let arr=[],catArr=[],j=0;
  var arr1=["category_name","category_search","language_permalink"]
    let k=0;
    linebreak = document.createElement('br');
    var container = document.querySelector('.categories');
    categories.forEach((category) => {
      arr.push(category["id"]);
      var elem = document.createElement('div');
      elem.setAttribute('id', `test${k}`,'class','divtest');
      k += 1;
      alert("k:"+k);
      elem.setAttribute('style', 'display="none"');
      elem.setAttribute('style', 'background-color="red"');
      elem.textContent = category["category_name"];
      container.appendChild(elem);
      container.appendChild(linebreak);
      catArr.push(category["category_name"]);
    });
    let eventid=0;
    alert("array"+arr)
    for(let i=0;i<arr.length;i++){
      document.getElementById(`test${i}`).addEventListener("click",dynamicUrl);
     eventid=i;
     alert("eventid:"+eventid)

    }
    function removeContent(){
      document.getElementById('removetext').innerHTML="";
    }
    function dynamicUrl(){
      let xhr = new XMLHttpRequest();
      xhr.open('GET', `https://syntaxdb.com/api/v1/languages/javascript/categories/${arr[eventid]}/concepts`);
      xhr.send();
      xhr.onload = function () {
        addExtraItemsToDOM(JSON.parse(xhr.response));
      };
    }
    function addExtraItemsToDOM(concepts) {
      let container = document.querySelector('.categories-id');
      concepts.forEach((concept) => {
        let elem = document.createElement('div');
        elem.setAttribute('class', `intest`);
        elem.setAttribute('style', 'display="none"');
        elem.textContent=catArr[eventid];
        elem.textContent = concept["concept_name"];
        container.appendChild(elem);
      });
      document.getElementById('removetext').addEventListener("click",removeContent);
  }
}

