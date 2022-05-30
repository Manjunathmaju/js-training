// Data-module.js

export async function getDataFromApi(f) {
    const data = await fetch(f);
    return await data.json();
}
export function createElementOfDom(element, className, idName) {
    let elementOfContainer = document.createElement(element);
    elementOfContainer.setAttribute('class', className);
    elementOfContainer.setAttribute('id', idName);

    return elementOfContainer;
}

