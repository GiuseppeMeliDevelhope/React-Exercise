import React from "react";
import { ExerciseThree } from "./ExerciseThree";
import { ExerciseTwo } from "./ExerciseTwo";

export class App extends React.Component{
    render(){
        return(
            <div>
               <ExerciseTwo name="Giuseppe" />
               <ExerciseThree />
            </div>
        )
    }
}