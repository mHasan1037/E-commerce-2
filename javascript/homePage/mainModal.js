//modal code is here............
const modalToggle = document.querySelector('.modal-cls-btn');
const modalBox = document.querySelector('.modal-container');

modalToggle.addEventListener('click', ()=>{
    modalBox.classList.add('close')
})

const modalCountDown = () =>{
    const newTime = new Date().getTime()

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const countdownDate = new Date('Jan 10, 2024 12:30:00').getTime() 

    const gapTime = countdownDate - newTime

    let modalDay = Math.floor(gapTime / day);
    let modalHour = Math.floor((gapTime % day) / hour);
    let modalMinute = Math.floor((gapTime % hour) / minute); 
    let modalSecond = Math.floor((gapTime % minute) / second); 

    document.querySelector('.modal-day').innerText = modalDay;
    document.querySelector('.modal-hour').innerText = modalHour < 10 ? "0" + modalHour : modalHour;
    document.querySelector('.modal-minute').innerText = modalMinute < 10 ? "0" + modalMinute : modalMinute;
    document.querySelector('.modal-sec').innerText = modalSecond < 10 ? "0" + modalSecond : modalSecond;
}

setInterval(modalCountDown, 1000)