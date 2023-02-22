import React from "react";

export class ClickTracker extends React.Component{
    

   state={
    target: this.props.target
   }
    
    
    
    handleLastPressed=(event)=>{
        console.log(event.currentTarget.name)
        
            this.setState({
                target: event.target.innerText
            })
            

            
       
    }

   
    
   
    render(){
       
        return(
            <div>
                <h1>Last button pressed:{this.state.target}</h1>
                <button name="Button-1"  onClick={this.handleLastPressed}>Button-1</button>
                <button name="Button-2"  onClick={this.handleLastPressed}>Button-2</button>
                <button name="Button-3"  onClick={this.handleLastPressed}>Button-3</button>
                
            </div>
        )
    }
}


