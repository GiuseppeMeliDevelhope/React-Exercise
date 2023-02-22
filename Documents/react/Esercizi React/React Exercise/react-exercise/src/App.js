import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    
    
    //ho creato la funzione qui perche nel Login component mi dava errore nella console
    handleLogin=loginInformation=>{
        console.log(loginInformation);
       }
    
    
    
    
    render(){
        return(
            <div>
                <Hello />
                <Welcome />
                <Counter />
                <ClickCounter />
                <ClickTracker />
                <InteractiveWelcome />
                <Login onLogin={this.handleLogin} />
            </div>
        )
    }
}