import { content, selfIntroContent } from "./selfIntro.js";

interface IData {
    [key: number]: string
}

let korean: IData;
let english: IData;

let isKorean = false;

$.ajax({
    url: "./data.json",
}).done((res: { korean: IData, english: IData }) => {
    korean = res.korean;
    english = res.english;
});

const toggleButton = document.getElementsByClassName('toggle')[0];

const toggleTargets = document.getElementsByClassName('toggle-target');

toggleButton.addEventListener('click', () => {
    const targetLang = isKorean ? english : korean;
    Array.from(toggleTargets).forEach((target, index) => target.textContent = targetLang[index]);
    if (selfIntroContent) selfIntroContent.textContent = isKorean ? content['english'] : content['korean'];
    isKorean = !isKorean;
});