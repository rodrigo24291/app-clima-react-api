import React from 'react';

export const Resultado=({temperatura})=>{
    if(temperatura==null || temperatura==undefined || temperatura.cod==404) return "";
 const {main:{temp,temp_max,temp_min},name}=temperatura   
 const kelvin=273.15;
return (
<>
<div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:  </h2>
                <p className="temperatura">
                    { parseFloat( temp - kelvin, 10 ).toFixed(2) }  <span> &#x2103; </span>
                </p>
                <p>Temperatura Máxima:
                    { parseFloat( temp_max - kelvin, 10 ).toFixed(2) }  <span> &#x2103; </span>
                </p>
                <p>Temperatura Minima:
                    { parseFloat( temp_min - kelvin, 10 ).toFixed(2) }  <span> &#x2103; </span>
                </p>
            </div>
        </div>
</>

)
}