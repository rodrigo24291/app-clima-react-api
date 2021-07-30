import React, { useEffect, useState } from 'react';
import { Formulario } from './componente/formulario';
import Header from './componente/header';
import {Re} from './helpers/help'
import {Resultado} from './componente/resultado'
import {Error} from './componente/error'
function App() {
  const [consultar,setconsulta]=useState(false)
  const [Valores,Setvalores]=useState({
    pais:'',
    ciudad:''
    })
    const [temperatura,settemperatura]=useState(null)


    useEffect(()=>{
      Re(Valores).then((resultadoapi)=>{settemperatura(resultadoapi)})
      },[consultar])
  
  
  return (
    <>

    <Header 
    titulo='Clima React App'
  />


  <div className="contenedor-form">
      <div className="container">
          <div className="row">
            
              <div className="col m6 s12">
              <Error temperatura={temperatura}/>
<Formulario setconsulta={setconsulta} Setvalores={Setvalores} Valores={Valores} />                  
              </div>
              <div className="col m6 s12">
                <Resultado temperatura={temperatura} />
              </div>
          </div>
      </div>
  </div>
</>

  );
}

export default App;
