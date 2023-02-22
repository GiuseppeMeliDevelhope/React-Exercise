import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
    render(){
        return(
        <div>
          <p>Welcome, <strong>Giuseppe</strong> </p>
          <Age age={22} />
        </div>
        )
        
    }
}

