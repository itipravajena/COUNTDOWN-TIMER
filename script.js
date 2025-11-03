const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}


const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime;

    let calSecs = Math.floor(timeDifference/1000) % 60;
    let calcMins = Math.floor(timeDifference/1000/60) % 60;
    let calcHours = Math.floor(timeDifference/1000/60/60) % 24;
    let calcDays = Math.floor(timeDifference/1000/60/60/24);

     days.textContent = formatTime(calcDays);
     mins.textContent = formatTime(calcMins);
     hours.textContent = formatTime(calcHours);
     secs.textContent = formatTime(calSecs);

    // console.log(mins);
    
}

const countDown = (targetDate) => {
    setInterval(() => updateCountDown(targetDate),1000);
}

const targetDate = new Date("February 8 2025 06:31");
countDown(targetDate);
