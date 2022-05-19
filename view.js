// app.js
import { getDataFromApi, createElementOfDom } from './server.js';
firstFunction();

let num = null;
let contantNum = null;
async function firstFunction() {
    const data = await getDataFromApi('https://syntaxdb.com/api/v1/languages/javascript/categories');
    attachMainMenu(data, 'm1');
}
async function as() {
    const subData = await getDataFromApi(`https://syntaxdb.com/api/v1/languages/javascript/categories/${this.id}/concepts`)
    attachSubMenu(subData, this.id)
}
async function contentReagion(event) {
    event.stopPropagation();
    let parentOfHeadAndBody;
    if (contantNum != this.id) {
        document.getElementById('c1').firstElementChild?.remove();
        contantNum = null;
    }

    if (contantNum == null || contantNum != this.id) {
        let containerOfContent = document.getElementById('c1');
        parentOfHeadAndBody = createElementOfDom('div', 'firstChildOfC1', 'c1Child');
        let arrayOfContent = [['concept_search', 'description', 'syntax', 'note', 'example'], [this.concept_search, this.description, this.syntax, this.notes, this.example]];
        for (let j = 0; j < 5; j++) {
            let containerOfContentHeading = createElementOfDom('h2', 'conceptSection', '123');
            let containerOfContentBody = createElementOfDom('pre', 'conceptSection', '789');
            containerOfContentHeading.textContent = arrayOfContent[0][j];
            containerOfContentBody.textContent = arrayOfContent[1][j];
            parentOfHeadAndBody.appendChild(containerOfContentHeading);
            parentOfHeadAndBody.appendChild(containerOfContentBody)
        }
        containerOfContent.appendChild(parentOfHeadAndBody);
        contantNum = this.id
    }
}


function attachMainMenu(data, domElement, objKey) {
    let container = document.getElementById(domElement);
    let allContainerInSideThis = createElementOfDom('div', 'mainMenu')
    for (let i = 0; i < data.length; i++) {
        let elementOfContainer = createElementOfDom('div', 'mainMenuItem', data[i].id);
        elementOfContainer.textContent = data[i].category_name;
        allContainerInSideThis.appendChild(elementOfContainer)
        container.appendChild(allContainerInSideThis)
        elementOfContainer.addEventListener("click", as.bind({ 'id': data[i].id }));
    }
}

function attachSubMenu(data, domElement) {
    let elementOfContainer2;
    if (num != null || num == domElement) {
        document.getElementById(num).firstElementChild?.remove();
    }
    if (num == domElement) {
        num = null;
    } else {
        let container = document.getElementById(domElement);
        let elementOfCon = createElementOfDom('div', 'subMenu', 'subParent');
        for (let i = 0; i < data.length; i++) {
            elementOfContainer2 = createElementOfDom('div', 'subMenuItem', i);
            elementOfContainer2.textContent = data[i].concept_name;
            elementOfCon.appendChild(elementOfContainer2)
            elementOfContainer2.addEventListener("click", contentReagion.bind(data[i]));
        }
        container.appendChild(elementOfCon);
        num = domElement;
    }
}
