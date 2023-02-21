import React from "react";

export class ExerciseThree extends React.Component{
   constructor(props){
    super(props)
    this.state= {
        a:5,
        b:7
    }

   }

   render(){
    return(
        <div>
            <h2>The sum is: {this.state.a + this.state.b}</h2>
        </div>
    )
   }
}