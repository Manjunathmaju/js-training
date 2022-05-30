// app.js
import { getDataFromApi, createElementOfDom } from './server.js';
import { appendTheElement } from './app.js';
getCategoriesFromApi();

let num = null;
let contentNum = null;

async function getCategoriesFromApi() {
    const data = await getDataFromApi('https://syntaxdb.com/api/v1/languages/javascript/categories');
    attachMainMenu(data, 'm1');
}
async function getConceptsFromApi() {
    const subData = await getDataFromApi(`https://syntaxdb.com/api/v1/languages/javascript/categories/${this.id}/concepts`)
    attachSubMenu(subData, this.id)
}
async function contentReagion(event) {
    event.stopPropagation();
    let parentOfHeadAndBody;
    if (contentNum != this.id) {
        document.getElementById('c1').firstElementChild?.remove();
        contentNum = null;
    }
    if (contentNum == null || contentNum != this.id) {
        let containerOfContent = document.getElementById('c1');
        parentOfHeadAndBody = createElementOfDom('div', 'firstChildOfC1', 'c1Child');
        let arrayOfContent = [['Concept_Search', 'Description', 'Syntax', 'Note', 'Example'], [this.concept_search, this.description, this.syntax, this.notes, this.example]];
        for (let j = 0; j < 5; j++) {
            let containerOfContentHeading = createElementOfDom('h2', 'conceptSection', '123');
            let containerOfContentBody = createElementOfDom('pre', 'conceptSection', '789');
            containerOfContentHeading.textContent = arrayOfContent[0][j];
            containerOfContentBody.textContent = arrayOfContent[1][j];
            parentOfHeadAndBody.appendChild(containerOfContentHeading);
            parentOfHeadAndBody.appendChild(containerOfContentBody)
            // parentOfHeadAndBody.appendTheElement(parentOfHeadAndBody, containerOfContentHeading, containerOfContentBody);
        }
        containerOfContent.appendChild(parentOfHeadAndBody);
        contentNum = this.id
    }
}

function attachMainMenu(data, domElement) {
    let container = document.getElementById(domElement);
    let allContainerInSideThis = createElementOfDom('div', 'mainMenu')
    for (let i = 0; i < data.length; i++) {
        let elementOfContainer = createElementOfDom('div', 'mainMenuItem', data[i].id);
        elementOfContainer.textContent = data[i].category_name;
        allContainerInSideThis.appendChild(elementOfContainer)
        container.appendChild(allContainerInSideThis)
        elementOfContainer.addEventListener("click", getConceptsFromApi.bind({ 'id': data[i].id }));
    }
}

function attachSubMenu(data, domElement) {
    let containerOfSubMenu;
    if (num != null || num == domElement) {
        document.getElementById(num).firstElementChild?.remove();
    }
    if (num == domElement) {
        num = null;
    } else {
        let containerOfDom = document.getElementById(domElement);
        let mainContainerOfSubMenu = createElementOfDom('div', 'subMenu', 'subParent');
        for (let i = 0; i < data.length; i++) {
            containerOfSubMenu = createElementOfDom('div', 'subMenuItem', i);
            containerOfSubMenu.textContent = data[i].concept_name;
            mainContainerOfSubMenu.appendChild(containerOfSubMenu)
            containerOfSubMenu.addEventListener("click", contentReagion.bind(data[i]));
        }
        containerOfDom.appendChild(mainContainerOfSubMenu);
        num = domElement;
    }
}
