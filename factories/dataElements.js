//criar elemento

const updateTemp = (temp_c) => {
  document.getElementById("tempEl").innerText = `${temp_c}ºC`;
};

const updateLocation = ({ name, date, localtime }) => {
  document.getElementById("locationName").innerText = `${name}`;

  document.getElementById("locationDate").innerText = `${date}`;

  document.getElementById("locationLocaltime").innerText = `${localtime}`;
};
