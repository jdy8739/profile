
interface IContent { 
    english: string, 
    korean: {
        title: string,
        content: string
    }[]
}

const selfIntroBox = document.querySelector('.intro-box');
const selfIntroBar = document.querySelector('.self-intro');

export let selfIntroContent: HTMLDivElement | null;
export let content: IContent;

if (selfIntroBox) selfIntroContent = selfIntroBox.querySelector('.self-intro-content');

const makeIntroContent = ({ title, content, isLastIndex }: { title: string, content: string, isLastIndex: boolean }) => {
    if (selfIntroContent) {
        const smallBox = document.createElement('div');
        const titleElem = document.createElement('h1');
        titleElem.classList.add('text-indigo-600')
        const contentElem = document.createElement('div');
        titleElem.textContent = title;
        contentElem.textContent = content;
        smallBox.append(titleElem, contentElem);
        selfIntroContent.append(smallBox);
        isLastIndex ? null : selfIntroContent.append(document.createElement('hr'));
    }
};

$.ajax({
    url: "./content.json",
}).done((res: IContent) => {
    content = res;
    if (selfIntroContent) {
        const len = res.korean.length;
        for (let i=0; i<len; i++) {
            const isLastIndex = (i + 1 === len);
            makeIntroContent({...res.korean[i], isLastIndex});
        }
        selfIntroContent.classList.add('intro-content');
        showSelfIntro();
        isIntroShown = true;
    }
});

let isIntroShown = false;

selfIntroBar?.addEventListener('click', () => {
    if (selfIntroContent) {
        if (!isIntroShown) showSelfIntro();
        else {
            selfIntroContent.classList.remove('slide-down');
            selfIntroContent.classList.add('slide-up');
            setTimeout(() => {
                selfIntroContent && selfIntroContent.classList.add('hide', 'intro-content');
            }, 580);
        }
        isIntroShown = !isIntroShown;
    }
})

const showSelfIntro = () => {
    if (selfIntroContent) {
        selfIntroContent.classList.remove('hide', 'slide-up');
        selfIntroContent.classList.add('slide-down');
        setTimeout(() => {
            selfIntroContent && selfIntroContent.classList.remove('intro-content');
        }, 578);
    }
}