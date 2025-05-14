const calendarBody = document.getElementById("calendar-body");
const monthYear = document.getElementById("monthYear");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const monthNames = [
  "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
  "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
];

function renderCalendar(month, year) {
  calendarBody.innerHTML = "";

  const firstDay = new Date(year, month).getDay();
  const daysInMonth = 32 - new Date(year, month, 32).getDate();

  const startingDay = (firstDay + 6) % 7; // Понеділок = 0

  monthYear.innerText = `${monthNames[month]} ${year}`;

  let date = 1;

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");

      if (i === 0 && j < startingDay) {
        cell.innerHTML = "";
      } else if (date > daysInMonth) {
        break;
      } else {
        cell.innerText = date;
        if (
          date === today.getDate() &&
          year === today.getFullYear() &&
          month === today.getMonth()
        ) {
          cell.classList.add("today");
        }
        date++;
      }

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);
  }
}

prevBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

nextBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);