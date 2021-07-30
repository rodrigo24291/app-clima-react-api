import React, { useEffect,useState } from 'react';



export const Formulario=({Setvalores,Valores,setconsulta})=>{


    
const handelvalor=(e)=>{

Setvalores({
    ...Valores,[e.target.name]:e.target.value
})

}



const Agregar=(e)=>{
e.preventDefault();
setconsulta(mancha=>!mancha)
}

    return(<>
    <form
    onSubmit={Agregar}
        >
            
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handelvalor}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    onChange={handelvalor}
                >
                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País: </label>
            </div>

            <div className="input-field col s12">
                <button  
                    type="submit"
                    
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                >
                    Buscar clima
</button>
            </div>
        </form>
    </>
    )
}