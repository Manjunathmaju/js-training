let isOpened = false;
let selectedLanguage = '';

async function urlFunctionCategories() {
    const responseData = await fetchData('categories');
    console.log(responseData);
    categories(responseData);// resopnse in array of object


}

async function urlFunctionForContent() {
    const responseData = await fetchData(`categories/${this.id}/concepts`);
    concept(responseData, this.id);

}

async function fetchData(url) {
    let response = await fetch(`https://syntaxdb.com/api/v1/languages/${selectedLanguage}/${url}`);
    return await response.json();
}


function customElements(elemName, attributes) {
    let element;
    if (elemName) {
        element = document.createElement(elemName);
    }
    if (attributes) {
        for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value)
        }
    }
    return element;
}

function createElementOfDom(element, className, idName) {
    let elementOfContainer = document.createElement(element);
    elementOfContainer.setAttribute('class', className);
    elementOfContainer.setAttribute('id', idName);
    return elementOfContainer;
}

function getElementByIdFormDom(id) {
    let elementCreated = document.getElementById(id);
    return elementCreated;
}

function textContentFunction(container, data) {
    container.textContent = data;
}

function appendTheChild(parent, child) {
    parent.appendChild(child)
    // container.appendChild(parent)
}

let traker = null;
let categoriesTraker = null;

function clear(element) {
    while (element.firstElementChild) {
        // const elem = getElementByIdFormDom(element)
        element.firstElementChild.remove();
    }
}

function logicOfRemoveContent(domElementId, element) {// let num = traker ?? domElementId;
    if (traker === null) {//simply display the concept
        return true;
    } if (traker === domElementId && traker !== null) {//clear the dom
        clear(element)
        traker = null
        return false;
    } if (traker !== domElementId && traker !== null) {//clear the dom and display the concept
        let temp = getElementByIdFormDom(traker);
        clear(temp)
        return true;
    }
}

function categories(responseData) {
    let containerOfCategories = getElementByIdFormDom('childOfSideMenu')
    if (categoriesTraker === null) {

    }
    let mainItemsOfCategories = createElementOfDom('div', 'mainItemsOfCategories', 'div1')
    for (let i = 0, length = responseData.length; i < length; i++) {
        let itemsOfCategories = createElementOfDom('div', 'itemsOfCategories', responseData[i].id)
        textContentFunction(itemsOfCategories, responseData[i].category_name)
        appendTheChild(mainItemsOfCategories, itemsOfCategories)
        appendTheChild(containerOfCategories, mainItemsOfCategories)
        itemsOfCategories.addEventListener('click', urlFunctionForContent.bind({ 'id': responseData[i].id }))
    }
}

function concept(responseData, domElementId) {
    let containerOfConcept = getElementByIdFormDom(domElementId)
    let mainItemsOfConcept = createElementOfDom('div', 'mainItemsOfConcept', 'div2')
    let result = logicOfRemoveContent(domElementId, containerOfConcept)
    if (result) {
        for (let i = 0, length = responseData.length; i < length; i++) {
            let itemsOfConcept = createElementOfDom('div', 'itemsOfContent', responseData[i].id)
            textContentFunction(itemsOfConcept, responseData[i].concept_name)
            appendTheChild(mainItemsOfConcept, itemsOfConcept)
            appendTheChild(containerOfConcept, mainItemsOfConcept)
            itemsOfConcept.addEventListener('click', conceptInformation.bind({ 'concept': responseData[i] }))
        }
        traker = domElementId;
    }
}

function conceptInformation() {
    let arr = [['concept_search', 'description', 'syntax', 'example', 'notes'], ['', '', '', '', '']]
    // let object = {}
    let containerOfConceptInfo = getElementByIdFormDom('information')
    let mainConceptInfo = createElementOfDom('div', 'mainInfo')
    for (let k = 0, i = arr[0].length; k < i; k++) {
        object = arr[i] + ":" + this.concept['concept_search']
        this.concept['description']
        arr[1][k] = this.concept[arr[0][k]]
        console.log(arr[1][k])
        let headConceptInfo = createElementOfDom('h2', 'h2Tag', 'heading')
        let preConceptInfo = createElementOfDom('pre', 'preTag', 'para')
        textContentFunction(headConceptInfo, arr[0][k])
        appendTheChild(containerOfConceptInfo, headConceptInfo)
        textContentFunction(preConceptInfo, arr[1][k])
        appendTheChild(containerOfConceptInfo, preConceptInfo)
    }
}


function rootConcept() {
    let domElements = {
        root: document.querySelector('#language'),
    }
    if (!isOpened) {
        isOpened = true
        selectLanguage(domElements.root);
    }
}
function selectLanguage(rootElement) {
    let rootlanguage = customElements('div', { class: 'parentLanguage', id: 'rootLanguage' })
    let onClick = (event) => {
        isOpened = false
        changeText(event.target.id, rootElement);
    }
    let languages = ['javascript', 'java', 'c'];
    languages.forEach((arrValue) => {
        let element = customElements('div', { class: 'languages', id: arrValue })
        element.textContent = arrValue
        rootlanguage.appendChild(element);
        element.addEventListener('click', onClick)
    });
    rootElement.appendChild(rootlanguage);

}

function changeText(elementId, rootElement) {
    document.getElementById('spanTag').innerText = elementId;
    if (!isOpened) {
        rootElement.firstElementChild.remove();
        isOpened = false
    }
    selectedLanguage = elementId;
    urlFunctionCategories();

}







/*
emply ui

create elements
take data from cloud
add data to ui elements

onClick
trak the click
add/remove data in UI elements

*/



