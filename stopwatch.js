let display = document.querySelector('.dispaly');
let stop = document.getElementById('stop');
let start = document.getElementById('start');
let reset = document.getElementById('reset');

let msec = 0o0;
let secs = 0o0;
let mins = 0o0;

let timerId = null;

start.addEventListener('click',function(){
    if(timerId !== null)
    {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stop.addEventListener('click',function(){
    clearInterval(timerId);
});

reset.addEventListener('click',function(){
    clearInterval(timerId);
    display.innerHTML = '00 : 00 : 00';
    msec = secs = mins = 0o0;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0; 
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;

        }
    }

    let msecString = msec < 10 ?'0${msec}': msec;
    let secsString = secs < 10 ?'0${secs}': msec;let minsString = mins < 10 ?'0${mins}': msec;

    display.innerHTML = '${minsString} : ${secsString} : {msecString}';
}