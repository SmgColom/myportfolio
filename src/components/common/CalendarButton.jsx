import React from "react";

function CalendarButton() {
  const googleCalendarUrl = "https://calendar.google.com/calendar/u/0?cid=c21vbnRveWExOTg1QGdtYWlsLmNvbQ";

  return (
      <button 
        onClick={() => window.open(googleCalendarUrl, "_blank")} 
        className="card-button"
      >📅 <strong>Book Me</strong>
      </button>
  );
}

export default CalendarButton;
  