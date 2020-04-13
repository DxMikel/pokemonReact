import React from 'react';

const IndexView = () => {
    return(
        <div className="paginaInicio">
            <div className="general-flex-container">
                <img className="imagenInicio" src="https://bit.ly/38Sqs7g" alt=""></img>
                <div className="sub-flex-container">
                    <button id="botonComenzar" className="botonInicio">Comenzar</button>
                    <span id="subTextoInicio" className="subTextoInicio" style={{ "textAlign": "center" }}>Sal de tu rutina habitual<br/>y regresa a los buenos tiempos,<br/>¡Disfruta de Pokémon!</span><br/>
                    <span id="textoInicio" className="textoInicio" style={{ "textAlign": "center" }}><strong>Recuerdas aquellos momentos<br/> agradables de tu infancia...</strong></span><br/>
                </div>
            </div>
        </div>
    );
}
export default IndexView;