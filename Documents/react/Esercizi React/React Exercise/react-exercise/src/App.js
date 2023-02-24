import React from "react";
import Sum from "./Sum";

export class App extends React.Component{
    render(){
        const numbers = [2, 3, 5, 7, 137];
        return(
            <div>
                <Sum numbers={numbers} />
            </div>
        )
    }
}
