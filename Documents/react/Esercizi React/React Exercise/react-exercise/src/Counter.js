import React from "react";

export class Counter extends React.Component{
    state= {
        count:  0
    }

    constructor(props){
        super(props)
       this._interval= setInterval(()=> {
         this.setState((state) => {
            return {
               count: state.count + 1
            }
         })
        }, 1000)
    }
      
    render(){
    
       return <div>
           <h1>Counter: {this.state.count} </h1>

       </div>
   
    }

    
}
