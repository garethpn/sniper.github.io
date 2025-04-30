document.addEventListener("DOMContentLoaded", function() {
    // Initialize Material UI components if needed
    // Example: M.AutoInit();

    // Function to fetch and display iCloud calendar events
    function fetchCalendarEvents() {
        const calendarUrl = 'https://p146-caldav.icloud.com/published/2/NDQ0MjQzNzgzNDQ0MjQzN6nINWImtfAhUW-Ysj7IcTqHdkXaiwS9cGlVnrMIE875Fh3WfiM5mZPHuCESadN8w6ErUqQfm7zMJpfOuLQY1EI';

        fetch(calendarUrl)
            .then(response => response.text())
            .then(data => {
                const events = parseICalendar(data);
                displayEvents(events);
            })
            .catch(error => console.error('Error fetching calendar:', error));
    }

    // Function to parse iCalendar data
    function parseICalendar(data) {
        const events = [];
        const lines = data.split('\n');
        let event = {};

        lines.forEach(line => {
            if (line.startsWith('BEGIN:VEVENT')) {
                event = {};
            } else if (line.startsWith('SUMMARY:')) {
                event.title = line.replace('SUMMARY:', '').trim();
            } else if (line.startsWith('DTSTART:')) {
                event.start = line.replace('DTSTART:', '').trim();
            } else if (line.startsWith('DTEND:')) {
                event.end = line.replace('DTEND:', '').trim();
            } else if (line.startsWith('END:VEVENT')) {
                events.push(event);
            }
        });

        return events;
    }

    // Function to display events on the page
    function displayEvents(events) {
        const eventsContainer = document.getElementById('calendar');
        eventsContainer.innerHTML = '';

        events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event');
            eventElement.innerHTML = `<h3>${event.title}</h3><p>Start: ${event.start}</p><p>End: ${event.end}</p>`;
            eventsContainer.appendChild(eventElement);
        });
    }

    // Call the function to fetch calendar events
    fetchCalendarEvents();
});