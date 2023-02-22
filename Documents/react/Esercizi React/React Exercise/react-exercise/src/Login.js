import React from "react";

export class Login extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
            remember:false
        }
      }


       handleInputChange=(event) => {
          const value = event.target.value
          const name= event.target.name
          const type= event.target.type
          const checked= event.target.checked
         
          
          this.setState({
           [name]: type==="checkbox" ? checked : value
          })
       }
    
       handleLogin = () => {
        this.props.onLogin(this.state)
      };
    
    
       render(){
            return(
               <div>
               
               <h1>Controlled Form </h1>
               
                    
                    <h2>Username</h2>
                    <input
                       name="username"
                       value={this.state.username}
                       onChange={this.handleInputChange}
                     />
                    
                     <h2>password</h2>
    
                     <input 
                     name="password"
                     value={this.state.password}
                     onChange={this.handleInputChange}
                     type="password"
                     />
    
                     <h2>Remember password</h2>
    
                     <input
                     name="remember"
                     type="checkbox"
                     checked={this.state.remember}
                     onChange={this.handleInputChange}
                     />


                   <div>
                     <button onClick={this.handleLogin}  disabled={!this.state.username || !this.state.password} type="submit" >Login</button>
                   </div>

                </div>
            
            )
        }
    
}