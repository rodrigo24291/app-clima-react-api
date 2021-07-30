import React from 'react';


export const Error=({temperatura})=>{
    if(temperatura==null || temperatura==undefined || temperatura.cod ==200 ) return "";

    return(
        <>
                <p className="red darken-4 error">Ciudad Invalida</p>

        </>
    )
    
}