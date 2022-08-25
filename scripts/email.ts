
const emailForm: HTMLFormElement | null = document.querySelector('#email-form');
const sendButton = document.querySelector('.send-btn');

enum RESULT {
    SENT = 'SENT',
    ERROR = 'ERROR',
    SEND = 'SEND',
    OK = 'OK'
}

const form = document.forms['email-form'];
const address = form.elements['address'];
const title = form.elements['title'];
const content = form.elements['content'];

emailForm?.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const addressVal = address.value;
    const titleVal = title.value;
    const contentVal = content.value;
    if (addressVal === '' || titleVal === '' || contentVal === '') return;
    else sendEmail(addressVal, titleVal, contentVal);
})

const sendEmail = (address: string, title: string, content: string) => {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "jdy8739@naver.com",
        Password: "8ECDAE52A642857B931D4F032346120F360C",
        To: 'jdy8739@naver.com',
        From: "jdy8739@gmail.com",
        Subject: `${address} ${title}`,
        Body: content
    }).then(message => handleEmailSend(message === RESULT.OK));
}

const handleEmailSend = (isSuccessful: boolean) => {
    if (sendButton) {
        sendButton.textContent = isSuccessful ? RESULT.SENT : RESULT.ERROR;
        const color = isSuccessful ? 'green' : 'red';
        const classes = [`bg-${color}-600`, `hover:bg-${color}-700`, `focus:ring-${color}-500`];
        sendButton.classList.add(...classes);
        setTimeout(() => {
            sendButton.classList.remove(...classes);
            sendButton.textContent = RESULT.SEND;
        }, 1000);
        if (isSuccessful) emailForm?.reset();
    }
}