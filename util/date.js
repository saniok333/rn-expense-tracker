export const getFormattedDate = (date) => date.toString().slice(0, 10);

export const getDateMinusDays = (days) => {
  const today = new Date();
  return new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - days
  );
};
