//Made by Zeph Suderman 

//Example Dates
const events = {
    '2025-01-13': { description: 'Kick-off Event 4:00 - 6:00pm', link: null },
    '2025-01-15': { description: 'Exec Meeting', link: null },
    '2025-01-20': { description: 'Meetup 4:00 - 6:00pm', link: null },
    '2025-01-27': { description: 'January Tournament 3:00 - 5:00pm', link: null },
    '2025-02-03': { description: 'February Workshop 2:00 - 4:00pm', link: null },
    '2025-02-05': { description: 'Exec Meeting', link: null },
    '2025-02-14': { description: 'Valentines Social', link: null },
    '2025-02-21': { description: 'Reading Week', link: null },
    '2025-03-07': { description: 'March Meetup', link: null },
    '2025-03-10': { description: 'Exec Meeting', link: null },
    '2025-03-15': { description: 'Spring Cleaning Event', link: null },
    '2025-03-22': { description: 'March Workshop', link: null },
    '2025-04-05': { description: 'April Meetup', link: null },
    '2025-04-10': { description: 'Exec Meeting', link: null },
    '2025-04-18': { description: 'April Networking Event', link: null },
    '2025-04-25': { description: 'Spring Tournament', link: null },
    '2025-05-06': { description: 'May Workshop', link: null },
    '2025-05-12': { description: 'Exec Meeting', link: null },
    '2025-05-15': { description: 'Community BBQ', link: null },
    '2025-05-22': { description: 'End of Spring Celebration', link: null },
    '2025-06-05': { description: 'Summer Kick-off', link: null },
    '2025-06-10': { description: 'Exec Meeting', link: null },
    '2025-06-18': { description: 'June Workshop', link: null },
    '2025-06-25': { description: 'June Social', link: null },
    '2025-07-03': { description: 'July Meetup', link: null },
    '2025-07-10': { description: 'Exec Meeting', link: null },
    '2025-07-18': { description: 'Outdoor Adventure Event', link: null },
    '2025-07-25': { description: 'Summer Tournament', link: null },
    '2025-08-05': { description: 'August Workshop', link: null },
    '2025-08-10': { description: 'Exec Meeting', link: null },
    '2025-08-15': { description: 'Community Picnic', link: null },
    '2025-08-22': { description: 'August Networking Event', link: null },
    '2025-09-05': { description: 'Back-to-School Event', link: null },
    '2025-09-10': { description: 'Exec Meeting', link: null },
    '2025-09-18': { description: 'September Workshop', link: null },
    '2025-09-25': { description: 'Fall Meetup', link: null },
    '2025-10-03': { description: 'October Social', link: null },
    '2025-10-10': { description: 'Exec Meeting', link: null },
    '2025-10-15': { description: 'Pumpkin Carving Contest', link: null },
    '2025-10-22': { description: 'October Workshop', link: null },
    '2025-11-05': { description: 'November Meetup', link: null },
    '2025-11-10': { description: 'Exec Meeting', link: null },
    '2025-11-15': { description: 'Thanksgiving Social', link: null },
    '2025-11-22': { description: 'November Workshop', link: null },
    '2025-12-05': { description: 'Holiday Kick-off', link: null },
    '2025-12-10': { description: 'Exec Meeting', link: null },
    '2025-12-15': { description: 'Winter Social', link: null },
    '2025-12-22': { description: 'End-of-Year Celebration', link: null },
    '2026-01-13': { description: 'Kick-off Event 4:00 - 6:00pm', link: null },
    '2026-01-15': { description: 'Exec Meeting', link: null },
    '2026-01-20': { description: 'Meetup 4:00 - 6:00pm', link: null },
    '2026-01-27': { description: 'January Tournament 3:00 - 5:00pm', link: null },
    '2026-02-03': { description: 'February Workshop 2:00 - 4:00pm', link: null },
    '2026-02-05': { description: 'Exec Meeting', link: null },
    '2026-02-14': { description: 'Valentines Social', link: null },
    '2026-02-21': { description: 'Reading Week', link: null },
    '2026-03-07': { description: 'March Meetup', link: null },
    '2026-03-10': { description: 'Exec Meeting', link: null },
    '2026-03-15': { description: 'Spring Cleaning Event', link: null },
    '2026-03-22': { description: 'March Workshop', link: null },
    '2026-04-05': { description: 'April Meetup', link: null },
    '2026-04-10': { description: 'Exec Meeting', link: null },
    '2026-04-18': { description: 'April Networking Event', link: null },
    '2026-04-25': { description: 'Spring Tournament', link: null },
    '2026-05-06': { description: 'May Workshop', link: null },
    '2026-05-12': { description: 'Exec Meeting', link: null },
    '2026-05-15': { description: 'Community BBQ', link: null },
    '2026-05-22': { description: 'End of Spring Celebration', link: null },
    '2026-06-05': { description: 'Summer Kick-off', link: null },
    '2026-06-10': { description: 'Exec Meeting', link: null },
    '2026-06-18': { description: 'June Workshop', link: null },
    '2026-06-25': { description: 'June Social', link: null },
    '2026-07-03': { description: 'July Meetup', link: null },
    '2026-07-10': { description: 'Exec Meeting', link: null },
    '2026-07-18': { description: 'Outdoor Adventure Event', link: null },
    '2026-07-25': { description: 'Summer Tournament', link: null },
    '2026-08-05': { description: 'August Workshop', link: null },
    '2026-08-10': { description: 'Exec Meeting', link: null },
    '2026-08-15': { description: 'Community Picnic', link: null },
    '2026-08-22': { description: 'August Networking Event', link: null },
    '2026-09-05': { description: 'Back-to-School Event', link: null },
    '2026-09-10': { description: 'Exec Meeting', link: null },
    '2026-09-18': { description: 'September Workshop', link: null },
    '2026-09-25': { description: 'Fall Meetup', link: null },
    '2026-10-03': { description: 'October Social', link: null },
    '2026-10-10': { description: 'Exec Meeting', link: null },
    '2026-10-15': { description: 'Pumpkin Carving Contest', link: null },
    '2026-10-22': { description: 'October Workshop', link: null },
    '2026-11-05': { description: 'November Meetup', link: null },
    '2026-11-10': { description: 'Exec Meeting', link: null },
    '2026-11-15': { description: 'Thanksgiving Social', link: null },
    '2026-11-22': { description: 'November Workshop', link: null },
    '2026-12-05': { description: 'Holiday Kick-off', link: null },
    '2026-12-10': { description: 'Exec Meeting', link: null },
    '2026-12-15': { description: 'Winter Social', link: null },
    '2026-12-22': { description: 'End-of-Year Celebration', link: null },
    '2027-01-13': { description: 'Kick-off Event 4:00 - 6:00pm', link: null },
    '2027-01-15': { description: 'Exec Meeting', link: null },
    '2027-01-20': { description: 'Meetup 4:00 - 6:00pm', link: null },
    '2027-01-27': { description: 'January Tournament 3:00 - 5:00pm', link: null },
    '2027-02-03': { description: 'February Workshop 2:00 - 4:00pm', link: null },
    '2027-02-05': { description: 'Exec Meeting', link: null },
    '2027-02-14': { description: 'Valentines Social', link: null },
    '2027-02-21': { description: 'Reading Week', link: null },
    '2027-03-07': { description: 'March Meetup', link: null },
    '2027-03-10': { description: 'Exec Meeting', link: null },
    '2027-03-15': { description: 'Spring Cleaning Event', link: null },
    '2027-03-22': { description: 'March Workshop', link: null },
    '2027-04-05': { description: 'April Meetup', link: null },
    '2027-04-10': { description: 'Exec Meeting', link: null },
    '2027-04-18': { description: 'April Networking Event', link: null },
    '2027-04-25': { description: 'Spring Tournament', link: null },
    '2027-05-06': { description: 'May Workshop', link: null },
    '2027-05-12': { description: 'Exec Meeting', link: null },
    '2027-05-15': { description: 'Community BBQ', link: null },
    '2027-05-22': { description: 'End of Spring Celebration', link: null },
    '2027-06-05': { description: 'Summer Kick-off', link: null },
    '2027-06-10': { description: 'Exec Meeting', link: null },
    '2027-06-18': { description: 'June Workshop', link: null },
    '2027-06-25': { description: 'June Social', link: null },
    '2027-07-03': { description: 'July Meetup', link: null },
    '2027-07-10': { description: 'Exec Meeting', link: null },
    '2027-07-18': { description: 'Outdoor Adventure Event', link: null },
    '2027-07-25': { description: 'Summer Tournament', link: null },
    '2027-08-05': { description: 'August Workshop', link: null },
    '2027-08-10': { description: 'Exec Meeting', link: null },
    '2027-08-15': { description: 'Community Picnic', link: null },
    '2027-08-22': { description: 'August Networking Event', link: null },
    '2027-09-05': { description: 'Back-to-School Event', link: null },
    '2027-09-10': { description: 'Exec Meeting', link: null },
    '2027-09-18': { description: 'September Workshop', link: null },
    '2027-09-25': { description: 'Fall Meetup', link: null },
    '2027-10-03': { description: 'October Social', link: null },
    '2027-10-10': { description: 'Exec Meeting', link: null },
    '2027-10-15': { description: 'Pumpkin Carving Contest', link: null },
    '2027-10-22': { description: 'October Workshop', link: null },
    '2027-11-05': { description: 'November Meetup', link: null },
    '2027-11-10': { description: 'Exec Meeting', link: null },
    '2027-11-15': { description: 'Thanksgiving Social', link: null },
    '2027-11-22': { description: 'November Workshop', link: null },
    '2027-12-05': { description: 'Holiday Kick-off', link: null },
    '2027-12-10': { description: 'Exec Meeting', link: null },
    '2027-12-15': { description: 'Winter Social', link: null },
    '2027-12-22': { description: 'End-of-Year Celebration', link: null }
  };
  

function createCalendar(year, month) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const calendarsDiv = document.getElementById('calendars');
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    const calendarDiv = document.createElement('div');
    calendarDiv.classList.add('calendar');
    
    // Calendar header
    const header = document.createElement('div');
    header.classList.add('calendar-header');
    header.textContent = `${months[month]} ${year}`;
    calendarDiv.appendChild(header);
    
    // Days of week
    const daysDiv = document.createElement('div');
    daysDiv.classList.add('calendar-days');
    daysOfWeek.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        daysDiv.appendChild(dayDiv);
    });
    calendarDiv.appendChild(daysDiv);
    
    // Dates
    const datesDiv = document.createElement('div');
    datesDiv.classList.add('calendar-dates');
    
    // Empty divs for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.classList.add('empty');
        datesDiv.appendChild(emptyDiv);
    }
    
    // Dates with events
    for (let day = 1; day <= daysInMonth; day++) {
        const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dateDiv = document.createElement('div');
    
        if (events[date]) {
            if (events[date].description.includes('Exec Meeting')) {
                dateDiv.classList.add('exec-meeting-date'); // Special class for Exec Meeting
            } else {
                dateDiv.classList.add('event-date');
            }

            const dateSpan = document.createElement('span');
            dateSpan.classList.add('date');
            dateSpan.textContent = day;

            const eventSpan = document.createElement('span');
            eventSpan.classList.add('event');
            eventSpan.textContent = events[date].description;

            if (events[date].link) {
                const link = document.createElement('a');
                link.href = events[date].link;
                link.target = '_blank'; // Opens the link in a new tab
                link.classList.add('event-link');
            
                link.appendChild(dateSpan);
                link.appendChild(eventSpan);
                dateDiv.appendChild(link);
            } else {
                // Append the date and event description without a link
                dateDiv.appendChild(dateSpan);
                dateDiv.appendChild(eventSpan);
            }
        } else {
            const dateSpan = document.createElement('span');
            dateSpan.classList.add('date');
            dateSpan.textContent = day;
            dateDiv.appendChild(dateSpan);
        }
        
        datesDiv.appendChild(dateDiv);
    }
    
    calendarDiv.appendChild(datesDiv);
    calendarsDiv.appendChild(calendarDiv);
}

function displayCurrentAndNextMonth() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    // Clear any existing calendars
    const calendarsDiv = document.getElementById('calendars');
    calendarsDiv.innerHTML = '';

    // Display the current month
    createCalendar(currentYear, currentMonth);

    // Display the next month
    const nextMonth = (currentMonth + 1) % 12;
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    createCalendar(nextYear, nextMonth);
}

// Call the function to display the calendars
displayCurrentAndNextMonth();