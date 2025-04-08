import { FaCalendarAlt } from "react-icons/fa";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--button-bg);
  color: var(--button-text);
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Work Sans', sans-serif;
  cursor: pointer;

  svg {
    font-size: 1.2rem; /* ajusta el tamaño del icono */
    vertical-align: middle;
  }
`;

function CalendarButton() {
  const googleCalendarUrl =
    "https://calendar.google.com/calendar/u/0?cid=c21vbnRveWExOTg1QGdtYWlsLmNvbQ";

  return (
    <StyledButton onClick={() => window.open(googleCalendarUrl, "_blank", "noopener noreferrer")} aria-label="Book a meeting on Google Calendar" >
      <FaCalendarAlt />
      <span>Book Me</span>
    </StyledButton>
  );
}

export default CalendarButton;
