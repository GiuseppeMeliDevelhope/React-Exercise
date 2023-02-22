import React from "react";

export class Counter extends React.Component{
    state= {
        count:  this.props.initialValue
    }

    constructor(props){
        super(props)
       this._interval= setInterval(()=> {
         this.setState((state) => {
            return {
               count: state.count + this.props.increment
            }
         })
        }, this.props.intervalTime)
    }
      
    render(){
    
       return <div>
           <h1>Counter: {this.state.count} </h1>

       </div>
   
    }

    
}

Counter.defaultProps={
    initialValue:0,
    increment:1,
    intervalTime:1000

}
