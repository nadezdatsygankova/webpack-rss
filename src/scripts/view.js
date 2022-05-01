function createImg(url, container) {
    const img = document.createElement('img');
    img.className = 'img'
    img.src = url;
    img.alt = 'city';
    container.appendChild(img);
}

function createDiv(container) {
    const div = document.createElement('div');
    div.className = 'div'
    container.appendChild(div);
    const divChild = document.createElement('div');
    divChild.className = 'div-child'
    div.appendChild(divChild);
}

export default {
    createImg,
    createDiv
};