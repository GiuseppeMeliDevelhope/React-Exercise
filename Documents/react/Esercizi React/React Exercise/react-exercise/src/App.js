
import { useState } from "react";
import { CarDetails } from "./CarDetails";








export function App (){
   

    const initialData = { model: '', year: '', color: '' }
  
    return <CarDetails initialData={initialData} />
  }
    







   
  