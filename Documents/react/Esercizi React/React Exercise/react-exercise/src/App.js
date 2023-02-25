import React from "react";
import { ClickCounter } from "./ClickCounter";


export class App extends React.Component{
    
    
    render(){

        const handleCounterChange = (count) => {
            console.log(`Counter changed to ${count}`);
          };
        
          return(
            <div>
               
                <ClickCounter onCounterChange={handleCounterChange} />
               
            </div>
        )
    }
}