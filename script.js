// script.js
const watches = {
    rolex: document.getElementById('rolex-watch'),
    omega: document.getElementById('omega-watch'),
    cartier: document.getElementById('cartier-watch'),
    tagHeuer: document.getElementById('tag-heuer-watch'),
    patekPhilippe: document.getElementById('patek-philippe-watch'),
};

// Function to update time for all watches
function updateTime() {
    const now = new Date();
    const timeString = ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())};

    Object.values(watches).forEach(watch => {
        watch.textContent = timeString;
    });
}

// Function to pad numbers less than 10 with leading zeros
function pad(number) {
    return number < 10 ? 0${number} : number;
}

// Update time every second
setInterval(updateTime, 1000);

// Initialize the time displays
updateTime();