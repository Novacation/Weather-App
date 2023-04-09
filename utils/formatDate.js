const formatDate = (localtime) => {
  const splitted = localtime.split(" ");

  let date = splitted[0];
  const hour = splitted[1];

  date = date.split("-");

  date = `${date[2]}/${date[1]}/${date[0]}`;

  return {
    formattedDate: date,
    formattedLocaltime: hour,
  };
};
