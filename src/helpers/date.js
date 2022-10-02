const formatDate = (timestamp) => {
  const formattedDate = new Date(timestamp).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return formattedDate;
};

export { formatDate };
