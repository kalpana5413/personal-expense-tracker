function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30; // 360/12 = 30 degrees per hour
    const minuteDeg = (minutes * 6) + (seconds / 60) * 6; // 360/60 = 6 degrees per minute
    const secondDeg = seconds * 6; // 360/60 = 6 degrees per second

    document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`;

    // Update digital time
    const digitalTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('digital-time').innerText = digitalTime;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to set the time immediately

