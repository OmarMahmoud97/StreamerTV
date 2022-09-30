const formatDate = (timestamp) => {
  const formattedDate = new Date(Date.now(timestamp)).toLocaleString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return formattedDate;
};

export { formatDate };
