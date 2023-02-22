import React from "react";

export class Age extends React.Component{
    render(){
       if(this.props.age>18){
        return <p>Your age is {this.props.age}.</p>
       }
    }
}

//Enter here your age:
//The age has to be a number
Age.defaultProps= {
    age:22
 }