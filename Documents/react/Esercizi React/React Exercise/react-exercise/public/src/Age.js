import React from "react";

export class Age extends React.Component{
    render(){
       if(this.props.age>18){
        return <p>Your age is {this.props.age}.</p>
       }
    }
}