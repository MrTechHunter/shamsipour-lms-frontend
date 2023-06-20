function minuteToHours(time: number) {
  const hours = Math.floor(time / 60);
  const minutes = time - hours * 60;
  const minutesCount = minutes.toString().length;
  const hoursCount = hours.toString().length;
  let fixedMinute;
  let fixedHours;
  if (time) {
    if (minutesCount === 1) {
      fixedMinute = `0${minutes}`;
    }
    if (hoursCount === 1) {
      fixedHours = `0${hours}`;
    }
  } else {
    return false;
  }
  return fixedMinute && !fixedHours
    ? `${hours}:${fixedMinute}`
    : !fixedMinute && fixedHours
    ? `${fixedHours}:${minutes}`
    : fixedMinute && fixedHours
    ? `${fixedHours}:${fixedMinute}`
    : `${hours}:${minutes}`;
}

export default minuteToHours;
