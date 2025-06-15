import { useEffect, useState } from "react";
import "./App.css";
import datos from "./assets/Data/datos_organizados.json";

function App() {
  const [count, setCount] = useState(0);
  const [selectedHotel, setSelectedHotel] = useState();
  const [selectedHabitacion, setSelectedHabitacion] = useState(0);
  
  const [selectedAlimentacion, setSelectedAlimentacion] = useState(0);
  const [selectedAlimentacionTotal, setSelectedAlimentacionTotal] = useState(0);
  
  const [selectedCirugia, setSelectedCirugia] = useState(0);
  const [selectedSpa, setSelectedSpa] = useState(0);
  const [selectedTour, setSelectedTour] = useState(0);

  useEffect(() => {
    console.log(selectedHotel);
    console.log(selectedHabitacion);
    console.log(selectedAlimentacion);
    console.log(selectedCirugia);
    console.log(selectedSpa);
    console.log(selectedTour);
    const total =
      parseFloat(selectedHabitacion) +
      parseFloat(selectedAlimentacionTotal) +
      parseFloat(selectedCirugia) +
      parseFloat(selectedSpa) +
      parseFloat(selectedTour);
    console.log("Total: ", total);
    const totalFormatted = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(total);
    console.log("Total Formatted: ", totalFormatted);
    document.querySelector(".card").innerHTML = `
      <h2>Total: ${totalFormatted}</h2>
    `;
  }, [selectedHotel, selectedHabitacion, selectedAlimentacionTotal, selectedCirugia, selectedSpa, selectedTour]);

  useEffect(() => {
    
  }, [])
  

  return (
    <>
      <div>
        <form action="">
          <select
            name=""
            id=""
            onChange={(e) => {
              setSelectedHotel(e.target.value);
            }}
          >
            <option value="">Seleccionar Hotel</option>
            {datos.Datos[0].map((dato, index) => (
              <option key={index} value={dato.Hotel}>
                {dato.Hotel}
              </option>
            ))}
          </select>

          <select
            name=""
            id=""
            onChange={(e) => {
              setSelectedHabitacion(e.target.value);
            }}
          >
            <option value={0}>Seleccionar Habitación</option>
            {datos.Datos[0].map((dato, index) =>
              dato.Hotel === selectedHotel
                ? dato.Opciones.map((opcion, i) => (
                    <option key={i} value={opcion.Precio}>
                      {opcion.Descripcion}
                    </option>
                  ))
                : null
            )}
          </select>

          <select name="" id=""
          onChange={(e) => {
            setSelectedAlimentacion(e.target.value);
          }}>
            <option value={0}>Seleccionar Alimentación</option>
            {datos.Datos[1].map((dato, index) => (
              <option key={index} value={dato.Precio}>
                {dato.Descripcion}
              </option>
            ))}
          </select>
          <input type="number" placeholder="Cantidad de Dias de Alimentacion" onChange={(e) => {
            setSelectedAlimentacionTotal(e.target.value * selectedAlimentacion);
          }} />
          <select name="" id=""
          onChange={(e) => {
            setSelectedCirugia(e.target.value);
          }}>
            <option value={0}>Seleccionar Cirugía</option>
            {datos.Datos[2].map((dato, index) => (
              <option key={index} value={dato.Precio}>
                {dato.Cirugia}
              </option>
            ))}
          </select>
          <select name="" id="" onChange={(e) => {
            setSelectedSpa(e.target.value);
          }}>
            <option value={0}>Seleccionar Spa</option>
            {datos.Datos[3].map((dato, index) => (
              <option key={index} value={dato.Precio}>
                {dato.Spa}
              </option>
            ))}
          </select>
          <select name="" id=""
          onChange={(e) => {
            setSelectedTour(e.target.value);
          }}>
            <option value= {0} >Seleccionar Tour</option>
            {datos.Datos[4].map((dato, index) => (
              <option key={index} value={dato.Precio}>
                {dato.Tours}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className="card"></div>
    </>
  );
}

export default App;
