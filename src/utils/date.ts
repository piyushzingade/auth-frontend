export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  // Check if the date is invalid
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  // Return the formatted date string
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
