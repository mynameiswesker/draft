import React from "react";
import Page from './Page';

const ImgHero = ({heroes}) => {

    return(
        <>
           {heroes.map((hero,id)=>{
               return(
                   <Page key={id} hero={hero} />
               )
           })}
        </>
    )
}

export default ImgHero;
