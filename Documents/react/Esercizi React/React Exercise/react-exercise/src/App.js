import React from "react";
import Container from "./Container";

export class App extends React.Component{
    render(){
        return(
            <div>
                <Container title="The Title">
                 <h1>Hello World!</h1>
                 <p>This is my custom container component.</p>
                </Container>
            </div>
        )
    }
}


    