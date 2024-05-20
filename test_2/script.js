//countdown
const StartWith = (number) => {
    return number < 10 ? '0' + number : number;
}

const calculateRemainingTime = (targetTime) => {
    let now = new Date();
    let timeDifference = targetTime - now;

    if (timeDifference <= 0) {
        return { hours: 0, minutes: 0, seconds: 0 };
    }

    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
}

const Countdown = (targetTime) => {
    return () => {
        let { hours, minutes, seconds } = calculateRemainingTime(targetTime);

        let hoursString = StartWith(hours);
        let minutesString = StartWith(minutes);
        let secondsString = StartWith(seconds);

        let timeString = `${hoursString}:${minutesString}:${secondsString}`;
        let countdown = document.getElementById('countdown');
        countdown.innerHTML = timeString;
    };
}

let targetTime = new Date();
targetTime.setHours(targetTime.getHours() + 24);

const updateCountdown = Countdown(targetTime);
setInterval(updateCountdown, 1000);
updateCountdown();



//img input
const toggleImageInput=()=> {
    let fileInput = document.getElementById('ImgFile');
    let urlInput = document.getElementById('ImgUrl');
    let fileRadio = document.getElementById('fileOption');
    let urlRadio = document.getElementById('urlOption');

    if (fileRadio.checked) {
        fileInput.disabled = false;
        urlInput.disabled = true;
    } else if (urlRadio.checked) {
        fileInput.disabled = true;
        urlInput.disabled = false;
    }
}