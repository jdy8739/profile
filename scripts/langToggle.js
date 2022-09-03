"use strict";
;
let korean;
let english;
let isKorean = false;
$.ajax({
    url: "./data.json",
}).done((res) => {
    korean = res.korean;
    english = res.english;
    toggleLanguage();
});
const toggleButton = document.getElementsByClassName('toggle')[0];
const toggleTargets = document.getElementsByClassName('toggle-target');
const toggleLanguage = () => {
    const targetLang = isKorean ? english : korean;
    Array.from(toggleTargets).forEach((target, index) => target.textContent = targetLang[index]);
    isKorean = !isKorean;
};
toggleButton.addEventListener('click', toggleLanguage);
