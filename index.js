const searchbox = document.getElementById("searchbox");
const btnSearch = document.getElementById("btnSearch");

const piece1 =
  "https://api.weatherapi.com/v1/current.json?key=bd1ed4d9486841428e3110930231503&q=";
const piece2 = "&aqi=no";

document.addEventListener('keypress', function (event) {
  const IfEnter = event.key == 'Enter'

  if (IfEnter) {
    getResult()
  }
})


function LabelAtualization() {
  let searchboxValue = searchbox.value

  if (searchboxValue != "") {
    document.getElementById("searchbox").value = ""
  }

}

//acessar API
const getResult = async () => {
  try {
    const result = await axios({
      method: "GET",
      url: formatURL(),
    });

    const { current, location } = result.data;

    const { temp_c } = current;

    const { name, localtime } = location;

    updateTemp(temp_c);

    const { formattedDate, formattedLocaltime } = formatDate(localtime);

    updateLocation({
      name,
      date: formattedDate,
      localtime: formattedLocaltime,
    });

    document.getElementById('dataBox').style.display = "flex"

    LabelAtualization()

  } catch (e) {
    console.log(e);
    alert(
      "Digite o nome correto da cidade (nomes de cidades compostos são separados)"
    );
  }
};




const formatURL = () => {
  return piece1.concat(searchbox.value, piece2);
};
