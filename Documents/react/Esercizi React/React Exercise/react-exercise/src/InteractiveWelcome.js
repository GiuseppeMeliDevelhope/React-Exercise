import React from "react";
import { File } from "./File";

export class InteractiveWelcome extends React.Component{
    
    
    constructor(props){
        super(props)
        this.state={
            name:""
        }

    }
    
    
    handleInputChange=(event) => {
        this.setState({
            name: event.target.value
        })
      
     }
    
     componentDidUpdate(){
        console.log(this.state)
      }
    
    
    
    render(){
        return(
            <div>
            <File name={this.state.name} />
            <input type="text" onChange={this.handleInputChange} value={this.state.name}/>
            </div>
        )
            
        
    }
}