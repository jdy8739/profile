
const box = document.createElement('div');

$.ajax({
    url: "./content.json",
}).done((res: { content: string }) => {
    box.textContent = res.content;
    box.classList.add('hide', 'intro-content');
});

const selfIntroBox = document.querySelector('.intro-box');

const selfIntroBar = document.querySelector('.self-intro');

let isIntroShown = false;

selfIntroBox?.appendChild(box);

selfIntroBar?.addEventListener('click', () => {
    if (!isIntroShown) box.classList.remove('hide');
    else box.classList.add('hide');
    isIntroShown = !isIntroShown;
})