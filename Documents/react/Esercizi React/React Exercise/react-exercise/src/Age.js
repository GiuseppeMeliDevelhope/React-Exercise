import React from "react";

export class Age extends React.Component{
    render(){
       if(this.props.age>18 && this.props.age<65 && this.props.name==="John" ){
        return (
        <div>
         <p> Your age is {this.props.age}.</p>
         <p>Welcome {this.props.name} </p>
         </div>
         )
      }else if(this.props.age<18 && this.props.name==="John") {
         return (<div>
            <p>You are very young!</p>
            <p>Welcome {this.props.name}</p>
            </div>)
      }else {
         return <p>Not valid!</p>
      }

    }
}


//Enter here your age:
//The name has to be John
Age.defaultProps= {
   age:19,
   name:"John"
}
 