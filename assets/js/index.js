const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    metros: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    metros: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    metros: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    metros: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    metros: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    metros: 500,
  },
];

const checkEmptyStr = (str) => {
  console.log("Viendo el check", str);
  return !str;
};

const loadHouses = (elements) => {
  document.querySelector("#total").innerHTML = elements.length;
  for (let i = 0; i < elements.length; i++) {
    document.querySelector(".propiedades").innerHTML += `
    <div class="propiedad">
      <div
        class="img"
        style="
            background-image: url('${elements[i].src}');
          "
      ></div>
      <section>
        <h5>${elements[i].name}</h5>
        <div class="d-flex justify-content-between">
          <p>Cuartos: ${elements[i].rooms}</p>
          <p>Metros: ${elements[i].metros}</p>
        </div>
        <p class="my-3">${elements[i].description}</p>
        <button class="btn btn-info">Ver más</button>
      </section>
    </div>
    `;
  }
};

const applyFilters = () => {
  let bedRoomsSelected = +document.querySelector("#bedRooms").value;
  let squareMinMetresSelected = +document.querySelector("#squareMinMetres").value;
  let squareMaxMetresSelected = +document.querySelector("#squareMaxMetres").value;
  if (
    !isNaN(bedRoomsSelected) === false ||
    !isNaN(squareMinMetresSelected) === false ||
    !isNaN(squareMaxMetresSelected) === false
  ) {
    alert("Ponga solo números por favor");
    return;
  }
  if (
    checkEmptyStr(bedRoomsSelected) ||
    checkEmptyStr(squareMinMetresSelected) ||
    checkEmptyStr(squareMaxMetresSelected)
  ) {
    alert("No deje el espacio vacío");
    return;
  }
  let newArray = propiedadesJSON.filter((e) => {
    return (
      bedRoomsSelected <= e.rooms &&
      squareMinMetresSelected <= e.metros &&
      squareMaxMetresSelected >= e.metros
    );
  });
  document.querySelector(".propiedades").innerHTML = "";
  loadHouses(newArray);
};

const resetFilters = () => {
  document.querySelector(".propiedades").innerHTML = "";
  document.querySelector("#bedRooms").value = "";
  document.querySelector("#squareMinMetres").value = "";
  document.querySelector("#squareMaxMetres").value = "";
  loadHouses(propiedadesJSON);
};

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".propiedades").innerHTML = "";
  loadHouses(propiedadesJSON);
});
