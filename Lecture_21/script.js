// starttime 
let startHr = 0;
let startMin = 0;
let startSec = 0;

const displayStartTime = () => {
    let start = document.getElementById('starttime');
    start.textContent = `${startHr.toString().padStart(2, '0')}:${startMin.toString().padStart(2, '0')}:${startSec.toString().padStart(2, '0')}`;
};

let startTimerId = setInterval(() => {
    displayStartTime();

    startSec++;

    if (startSec === 60) {
        startMin++;
        startSec = 0;
    }

    if (startMin === 60) {
        startHr++;
        startMin = 0;
    }

    if (startHr === 1 && startMin === 0 && startSec === 0) {
        clearInterval(startTimerId);
    }
}, 1000);

displayStartTime();


//endtime
let endHr = 24;
let endMin = 14;
let endSec = 10;

const displayEndTime = () => {
    let end = document.getElementById('endtime');
    end.textContent = `${endHr.toString().padStart(2, '0')}:${endMin.toString().padStart(2, '0')}:${endSec.toString().padStart(2, '0')}`;
};
let endTimerId = setInterval(() => {
    displayEndTime();
    endSec--;
    if (endSec < 0) {
        if (endMin > 0) {
            endMin--;
        } else {
            endHr--;
            endMin = 59;
        }
        endSec = 59;
    }
    if (endHr === 0 && endMin === 0 && endSec === 0) {
        clearInterval(endTimerId);
    }
}, 1000);

displayEndTime();

//counter 
let A = 0, B = 0, C = 0, D = 0
const displayCounter = () => {
    document.getElementById('counterA').textContent = `A: ${A}`;
    document.getElementById('counterB').textContent = `B: ${B}`;
    document.getElementById('counterC').textContent = `C: ${C}`;
    document.getElementById('counterD').textContent = `D: ${D}`;
    
};
let counterTimerId = setInterval(() => {
    if (A < 500) {
        A++;
    } else if (B < 600) {
        B++;
    } else if (C < 700) {
        C++;
    } else if (D < 800) {
        D++;
    } else {
        clearInterval(counterTimerId);
    }
    displayCounter();
}, 10);

displayCounter();
