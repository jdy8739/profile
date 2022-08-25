const selfIntroBox = document.querySelector('.intro-box');
const selfIntroBar = document.querySelector('.self-intro');
export let selfIntroContent;
export let content;
if (selfIntroBox)
    selfIntroContent = selfIntroBox.querySelector('.self-intro-content');
$.ajax({
    url: "./content.json",
}).done((res) => {
    content = res;
    if (selfIntroContent) {
        selfIntroContent.textContent = res.english;
        selfIntroContent.classList.add('hide', 'intro-content');
    }
});
let isIntroShown = false;
selfIntroBar === null || selfIntroBar === void 0 ? void 0 : selfIntroBar.addEventListener('click', () => {
    if (selfIntroContent) {
        if (!isIntroShown) {
            selfIntroContent.classList.remove('hide', 'slide-up');
            selfIntroContent.classList.add('slide-down');
            setTimeout(() => {
                selfIntroContent && selfIntroContent.classList.remove('intro-content');
            }, 578);
        }
        else {
            selfIntroContent.classList.remove('slide-down');
            selfIntroContent.classList.add('slide-up');
            setTimeout(() => {
                selfIntroContent && selfIntroContent.classList.add('hide', 'intro-content');
            }, 580);
        }
        isIntroShown = !isIntroShown;
    }
});
