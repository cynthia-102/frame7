import React from 'react';
import fondo from './assets/fondo.png'; // Importa la imagen de fondo
import niños from './assets/niños.png'; // Importa otra imagen
import marco from './assets/marco.png'; // Importa la imagen del marco
import imagen1 from './assets/imagen1.png'; // Importa otra imagen adicional
import './Appframe7.css'; // Asegúrate de importar tu archivo CSS donde aplicarás los estilos.

function Appframe7() {
    return (
        <div className="container" style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <button className="inicio-button">INICIO</button> {/* Botón INICIO */}
            <div className="left-column">
                <img src={imagen1} alt="Imagen adicional" /> {/* Muestra la imagen adicional */}
            </div>
            <div className="right-column">
                <div className="marco-container">
                    <img src={marco} alt="Marco" className="marco-image" /> {/* Muestra la imagen del marco */}
                    <div className="text-overlay">
                        <p>Verde: Aquí debes dejar las botellas o elementos de vidrio. Ten especial cuidado al depositar este contenido. ¡No dejes que tus niños jueguen o manipulen los residuos de este contenedor!</p>
                    </div>
                </div>
                <button className="green-button">¡CLICK AQUÍ PARA VOLVER A LOS CONTENEDORES!</button>
            </div>
            <div className="bottom-right">
                <img src={niños} alt="Niños reciclando" /> {/* Muestra la imagen de los niños */}
            </div>
        </div>
    );
}

export default Appframe7;
