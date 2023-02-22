import React from "react";

export class Welcome extends React.Component{
    render(){
        return(
        <div>
          <p>Welcome, <strong>Giuseppe</strong> </p>
          <p>Your age is {this.props.age}</p>
        </div>
        )
        
    }
}

Welcome.defaultProps= {
    
    age: 22
    
}