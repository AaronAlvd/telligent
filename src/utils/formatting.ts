
export const formatDate = (dateString: string) => {
  const date = new Date(dateString)

  const month = date.getMonth() + 1; // Months are zero-indexed in JavaScript
  const day = date.getDate();
  const year = date.getFullYear();

  // Pad month and day with leading zeros if necessary
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  return `${formattedMonth}/${formattedDay}/${year}`;
};