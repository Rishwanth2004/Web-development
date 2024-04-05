let clock = document.querySelector('.clock')
function runClock(){
    let time = new Date()
    let hrs = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    var txt = "AM"
    if(hrs>12){
        hrs = hrs-12;
        txt = "PM"
    }
    else if(hrs == 0){
        hrs = 12;
        txt = "AM"
    }
    hrs = hrs<10?'0'+hrs:hrs;
    min = min<10?'0'+min:min;
    sec = sec<10?'0'+sec:sec;
    clock.innerHTML = `${hrs} : ${min} : ${sec} ${txt}`
}
setInterval(runClock,1000)