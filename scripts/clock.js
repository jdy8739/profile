"use strict";
const clock = document.querySelector('.clock');
const getNowTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const hour = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const sec = String(now.getSeconds()).padStart(2, '0');
    return `${year} / ${month + 1} / ${date} - ${hour} : ${minutes} : ${sec}`;
};
setInterval(() => {
    if (clock)
        clock.textContent = getNowTime();
}, 1000);
