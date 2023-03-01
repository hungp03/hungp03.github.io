const h = document.querySelector('.hours');
const m = document.querySelector('.minutes');
const s = document.querySelector('.seconds');

function currentTime() {
    const now = new Date();
    let hs = now.getHours();
    let ms = now.getMinutes();
    let ss = now.getSeconds();
    let currentDay = now.getDate();
    let currentMonth = now.getMonth();
    let currentYear = now.getFullYear();
    let temp = Math.floor(currentDay + (currentMonth + 1) * 2 + ((currentMonth + 2) * 3) / 5 + currentYear + (currentYear / 4)) % 7;
    let day_name = '';
    switch (temp) {
        case 0:
            day_name = "Sunday";
            break;
        case 1:
            day_name = "Monday";
            break;
        case 2:
            day_name = "Tuesday";
            break;
        case 3:
            day_name = "Wednesday";
            break;
        case 4:
            day_name = "Thursday";
            break;
        case 5:
            day_name = "Friday";
            break;
        case 6:
            day_name = "Saturday";
            break;
    }
    h.innerHTML = (hs < 10) ? '0' + hs : hs;
    m.innerHTML = (ms < 10) ? '0' + ms : ms;
    s.innerHTML = (ss < 10) ? '0' + ss : ss;
    document.querySelector('p').innerHTML = currentDay + ' / ' + (currentMonth + 1) + ' / ' + currentYear + ' - ' + day_name;
}

setInterval(
    currentTime, 500
);