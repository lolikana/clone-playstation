export const normalizeDate = (date: Date) => {
  const currYear = date.getFullYear();
  const getMonth = date.getMonth();
  let currMonth = '';
  if (getMonth === 0 || getMonth <= 8) {
    currMonth = `0${+getMonth + 1}`;
  } else if (getMonth) {
    currMonth = `${+getMonth + 1}`;
  }
  const getDate = date.getDate().toString();
  let currDay = ' ';
  if (getDate.length < 2) {
    currDay = `0${getDate}`;
  } else {
    currDay = getDate;
  }
  const normalizeDate = `${currYear}-${currMonth}-${currDay}`;

  return normalizeDate;
};
