
const timeZones = {
    "New York": "America/New_York",
    "Los Angeles": "America/Los_Angeles",
    "London": "Europe/London",
    "Tokyo": "Asia/Tokyo",
    "India": "Asia/Kolkata",
};


function updateClock(timeZone) {
    const now = new Date();
    const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timeString = now.toLocaleString('en-US', options);

    const [hours, minutes, seconds] = timeString.split(':');
    document.getElementById('time').textContent = `${hours}:${minutes}`;

    // Update the date circles (you can keep the date in local time or also convert it)
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();

    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
    document.getElementById('year').textContent = year;
}

let container = document.querySelector('.push-hiddenItem');

let btn = document.querySelector('.customize-btn').addEventListener('click', () => {

    let hidden = document.createElement('ul')
    hidden.classList.add('hidden')

    let india = document.createElement('li')
    india.classList.add('india')
    india.textContent = 'india'
    india.addEventListener('click', () => {
        if (timeZones["India"]) {
            const timeZone = timeZones["India"];
            document.querySelector('.location').textContent = 'India';
            // Update the clock every second with the new time zone
            clearInterval(clockInterval);
            clockInterval = setInterval(() => updateClock(timeZone), 1000);
            updateClock(timeZone);
            hidden.style.display = 'none'


        } else {
            alert("Location not found. Please enter a valid location.");
        }
    })

    let newyork = document.createElement('li')
    newyork.classList.add('newyork')
    newyork.textContent = 'newyork'
    newyork.addEventListener('click', () => {
        if (timeZones["New York"]) {
            const timeZone = timeZones["New York"];
            document.querySelector('.location').textContent = 'New York';
            // Update the clock every second with the new time zone
            clearInterval(clockInterval);
            clockInterval = setInterval(() => updateClock(timeZone), 1000);
            updateClock(timeZone);
            hidden.style.display = 'none'

        } else {
            alert("Location not found. Please enter a valid location.");
        }
    })

    let los = document.createElement('li')
    los.classList.add('los')
    los.textContent = 'Los_Angeles'
    los.addEventListener('click', () => {
        if (timeZones["Los Angeles"]) {
            const timeZone = timeZones["Los Angeles"];
            document.querySelector('.location').textContent = 'Los Angeles';
            // Update the clock every second with the new time zone
            clearInterval(clockInterval);
            clockInterval = setInterval(() => updateClock(timeZone), 1000);
            updateClock(timeZone);
            hidden.style.display = 'none'

        } else {
            alert("Location not found. Please enter a valid location.");
        }
    })

    let london = document.createElement('li')
    london.classList.add('london')
    london.textContent = 'London'
    london.addEventListener('click', () => {
        if (timeZones["London"]) {
            const timeZone = timeZones["London"];
            document.querySelector('.location').textContent = 'London';
            // Update the clock every second with the new time zone
            clearInterval(clockInterval);
            clockInterval = setInterval(() => updateClock(timeZone), 1000);
            updateClock(timeZone);
            hidden.style.display = 'none'

        } else {
            alert("Location not found. Please enter a valid location.");
        }
    })

    let tokyo = document.createElement('li')
    tokyo.classList.add('tokyo')
    tokyo.textContent = 'tokyo'
    tokyo.addEventListener('click', () => {
        if (timeZones["Tokyo"]) {
            const timeZone = timeZones["Tokyo"];
            document.querySelector('.location').textContent = 'Tokyo';
            // Update the clock every second with the new time zone
            clearInterval(clockInterval);
            clockInterval = setInterval(() => updateClock(timeZone), 1000);
            updateClock(timeZone);
            hidden.style.display = 'none'

        } else {
            alert("Location not found. Please enter a valid location.");
        }
    })
    hidden.append(india, newyork, los, london, tokyo)



        > container.appendChild(hidden)
});


// Update the clock every second with the default time zone (Mumbai)
const defaultTimeZone = 'Asia/Kolkata'; // Default to Mumbai
let clockInterval = setInterval(() => updateClock(defaultTimeZone), 1000);

// Initial call to display the time immediately
updateClock(defaultTimeZone);
