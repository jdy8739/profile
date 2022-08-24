"use strict";
const box = document.createElement('div');
$.ajax({
    url: "./content.json",
}).done((res) => {
    box.textContent = res.content;
    box.classList.add('hide', 'intro-content');
});
const selfIntroBox = document.querySelector('.intro-box');
const selfIntroBar = document.querySelector('.self-intro');
let isIntroShown = false;
selfIntroBox === null || selfIntroBox === void 0 ? void 0 : selfIntroBox.appendChild(box);
selfIntroBar === null || selfIntroBar === void 0 ? void 0 : selfIntroBar.addEventListener('click', () => {
    if (!isIntroShown)
        box.classList.remove('hide');
    else
        box.classList.add('hide');
    isIntroShown = !isIntroShown;
});
