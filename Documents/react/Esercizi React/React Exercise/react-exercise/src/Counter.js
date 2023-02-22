import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
    state= {
        count:  this.props.initialValue
    }

    //it works too without the constructor
   componentDidMount(){
       this._interval= setInterval(()=> {
         this.setState((state) => {
            return {
               count: state.count + this.props.increment
            }
         })
        }, this.props.intervalTime)
    }
    
      
    render(){
    
       return <CounterDisplay count={this.state.count} />
   
    }

    
}

Counter.defaultProps={
    initialValue:0,
    increment:1,
    intervalTime:1000

}