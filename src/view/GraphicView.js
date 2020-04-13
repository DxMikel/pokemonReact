import React, {useEffect, useState}from 'react';
import {Polar} from 'react-chartjs-2';

const urlJson = "https://raw.githubusercontent.com/anapaulaoliva/GDL004-data-lovers/master/src/data/pokemon/pokemon.json";

const PolarGraph = () => {
  const [suma, setSuma] = useState([]);
  const [tipos, setTipos] = useState([]);
  useEffect(()=>{
    const GetData = async ()=>{
      let labels = {
        "Bug": 0,
        "Dragon": 0,
        "Electric": 0,
        "Fighting": 0,
        "Fire": 0,
        "Flying": 0,
        "Ghost": 0,
        "Grass": 0,
        "Ground": 0,
        "Ice": 0,
        "Normal": 0,
        "Poison": 0,
        "Psychic": 0,
        "Rock": 0,
        "Water": 0
      };
      try {
        const dataPokemon = await fetch(urlJson);
        let dataJson = await dataPokemon.json();
        for (let i=0; i < dataJson.length; i++) {
          for (let j=0; j < dataJson[i].weaknesses.length; j++) {
              switch (dataJson[i].weaknesses[j]){
                case "Bug": labels.Bug++; break;
                case "Dragon": labels.Dragon++; break;
                case "Electric": labels.Electric++; break;
                case "Fighting": labels.Fighting++; break;
                case "Fire": labels.Fire++; break;
                case "Flying": labels.Flying++; break;
                case "Ghost": labels.Ghost++; break;
                case "Grass": labels.Grass++; break;
                case "Ground": labels.Ground++; break;
                case "Ice": labels.Ice++; break;
                case "Normal": labels.Normal++; break;
                case "Poison": labels.Poison++; break;
                case "Psychic": labels.Psychic++; break;
                case "Rock": labels.Rock++; break;
                case "Water": labels.Water++; break;
                default:break;
             }
           }
         }
      } catch (e) {
        console.error(e);
      }finally{
        for (let key in labels) {
          if (labels.hasOwnProperty(key)) {
            setSuma(suma=>[...suma,labels[key]]);
            setTipos(tipos=>[...tipos,key]);
           }
         }
      }
    }
    GetData();
  },[]);
  const data = {
    datasets: [{
      data: suma,
      backgroundColor: [
        'rgba(255, 99, 132, 3)',
        'rgba(54, 162, 235, 3)',
        'rgba(248, 213, 163, 3)',
        'rgba(151, 179, 230, 3)',
        'rgba(252, 247, 222, 3)',
        'rgba(230, 224, 212, 3)',
        'rgba(253, 223, 223, 3)',
        'rgba(245, 245, 245, 3)',
        'rgba(198, 188, 219, 3)',
        'rgba(222, 253, 224, 3)',
        'rgba(244, 231, 218, 3)',
        'rgba(172, 229, 238, 3)',
        'rgba(244, 231, 218, 3)',
        'rgba(152, 215, 165, 3)',
        'rgba(234, 237, 161, 3)',
        'rgba(244, 231, 218, 3)',
        'rgba(203, 207, 207, 3)',
        'rgba(222, 243, 253, 3)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 2)',
        'rgba(54, 162, 235, 2)',
        'rgba(248, 213, 163, 2)',
        'rgba(151, 179, 230, 2)',
        'rgba(252, 247, 222, 2)',
        'rgba(230, 224, 212, 2)',
        'rgba(253, 223, 223, 2)',
        'rgba(245, 245, 245, 2)',
        'rgba(198, 188, 219, 2)',
        'rgba(222, 253, 224, 2)',
        'rgba(244, 231, 218, 2)',
        'rgba(172, 229, 238, 2)',
        'rgba(244, 231, 218, 2)',
        'rgba(152, 215, 165, 2)',
        'rgba(234, 237, 161, 2)',
        'rgba(244, 231, 218, 2)',
        'rgba(203, 207, 207, 2)',
        'rgba(222, 243, 253, 2)'
    ],
      label: 'Weaknesses'
    }],
    labels: tipos
  };

  return(
    <Polar data={data} />
  );
};
export default PolarGraph;