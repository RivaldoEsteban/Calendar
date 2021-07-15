function setCurrentTimePosition() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();
  const currentMin = currentDate.getMinutes();

  const currentTime = document.getElementById("currentTime");

  const calendar = document.querySelector(".calendar-by-day");
  console.log(calendar);

  // let calendarBlockSize = $calendar.clientHeight;
  // let calendarInlineSize = $calendar.clientWidth;

  let calendarBlockSize = calendar.clientHeight;
  let calendarInlineSize = calendar.clientWidth;

  const calendarTimezoneCellInlineSize =
    document.querySelector(".timezoneCell").clientWidth;
  calendarInlineSize = calendarInlineSize - calendarTimezoneCellInlineSize;

  const cellInlineSize = calendarInlineSize / 7;

  // console.log({ calendarBlockSize }, { calendarInlineSize })
  const calendarDayBlockSize =
    document.querySelector(".calendarDay").clientHeight;
  calendarBlockSize = calendarBlockSize - calendarDayBlockSize;
  // console.log({ calendarBlockSize })
  const cellBlockSize = calendarBlockSize / 24;
  // console.log({ cellBlockSize }, { cellInlineSize })

  currentTime.style.top = `${
    cellBlockSize * currentHour +
    calendarDayBlockSize +
    (cellBlockSize / 60) * currentMin
  }px`;
  // currentTime.style.left = `${
  //   cellInlineSize * currentDay + calendarTimezoneCellInlineSize + 24
  // }px`;
}

window.intervalCurrentTimePosition = null;

function intervalCurrentTimePositionDay(interval = 1000) {
  clearInterval(window.intervalCurrentTimePosition);
  setCurrentTimePosition();
  window.intervalCurrentTimePosition = setInterval(
    setCurrentTimePosition,
    interval
  );
}

export { setCurrentTimePosition, intervalCurrentTimePositionDay };
