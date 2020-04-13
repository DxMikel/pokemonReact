import React from 'react';
import PolarGraph from '../view/GraphicView';
import IndexView from '../view/IndexView';
//import { componentName } from '../view/header';

const components = {
    GraphicView: PolarGraph,
    Inicio: IndexView
};

const DynamicComponent = (props) => {
    //const names = useContext(componentName);
    const SelectComponent = components[props.component];
    return(<SelectComponent />)
};

export default DynamicComponent;