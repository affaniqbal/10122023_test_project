// common.js
function displayDateTime() {
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString();
    const timeString = currentDate.toLocaleTimeString();
    document.getElementById('date-time').innerHTML = `Date: ${dateString}, Time: ${timeString}`;
}

window.onload = displayDateTime;
