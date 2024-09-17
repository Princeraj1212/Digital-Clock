const timer = document.querySelector('.timer');

console.log(timer,"timer");

function getTime(){
    console.log("getTime");
    const now = new Date();
    console.log(now,"now");
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    console.log(h,m,s);
    const timerstr = h + ":" + m + ":" + s ;
    timer.textContent = timerstr;
}

setInterval(getTime, 1000);