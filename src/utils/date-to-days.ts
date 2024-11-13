export const dateToDays = (date: string) => {
  const givenDate = new Date(date.split('T')[0]).getTime();

  // Get the current date
  const today = new Date().getTime();

  // Calculate the time difference in milliseconds
  const timeDifference = today - givenDate;

  // Convert the time difference to days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) return 'updated today';

  if (daysDifference === 1) return 'updated 1 day ago';

  return `updated ${daysDifference} days ago`;
};