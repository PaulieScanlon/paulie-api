export const formatDatestamp = (dateString) => {
  const date = new Date(dateString);

  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const year = date.getUTCFullYear();
  const time = date.toLocaleTimeString();

  return `${month} ${day}, ${year} ${`@${time}`}`;
};
