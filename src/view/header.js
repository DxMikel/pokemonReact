import React, { useState } from 'react';
import DynamicComponent from '../controller/Dynamic';

//const names = "Inicio";

export const componentName = React.createContext();

const Header = () =>{
    const [name, setName] = useState("Inicio");
    return (
        <>
        <div className="barraEstatica">
            <img id="pokebola" className="botonInicio" src="https://bit.ly/2PAI14g" alt ="imagePokebola" onClick={() => {setName("Inicio")}} />
            <img className="logotipo" src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png" alt="imageLogo" onClick={() =>{
                setName("GraphicView");
            }} />
            <img id="menu" className="pokedex" src="https://bit.ly/34zyXAS" alt ="imageMenu" />
        </div>
        <DynamicComponent component={name} />
        </>
    );
}

export default Header;

/**
 * <componentName.Provider value={ name }>
            <div className="container">
                <DynamicComponent nombre="Prueba" />
            </div>
        </componentName.Provider>
 */