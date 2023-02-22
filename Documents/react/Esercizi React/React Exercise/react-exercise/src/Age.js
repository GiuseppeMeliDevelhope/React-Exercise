import React from "react";

export class Age extends React.Component{
    render(){
       if(this.props.age>18 && this.props.age<65 ){
        return (<div>
            <p>Your age is {this.props.age}.</p>
            <p>Welcome {this.props.name}.
            </p>
            </div>)
       }
    }
}

//Enter here your age:
//The age has to be a number
//The name has to be John
Age.defaultProps= {
    age:22,
    name:"John"
 }