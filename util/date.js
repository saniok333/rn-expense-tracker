export const getFormattedDate = (date) => {
  const year = date.getFullYear();
  const month =
    (date.getMonth() + 1).toString().length < 2
      ? `0${date.getMonth() + 1}`
      : date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

export const getDateMinusDays = (days) => {
  const today = new Date();
  return new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - days
  );
};
