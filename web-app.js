let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://syntaxdb.com/api/v1/languages/javascript/categories');
xhr.send();
xhr.onload = function () {
  addItemsToDOM(JSON.parse(xhr.response));
};
xhr.onerror = function () {
  // alert("cannot send a request");k
};

function addItemsToDOM(categories) {
    var container = document.querySelector('.categories');
    categories.forEach((category) => {
      var elem = document.createElement('div');
      elem.setAttribute('class', 'test');
      elem.setAttribute('style', 'display="none"');
      elem.textContent = category["category_name"]+"------------------------------"+category["category_search"]+"--------------------------------"+category["language_permalink"];
      container.appendChild(elem);
    });
  }

