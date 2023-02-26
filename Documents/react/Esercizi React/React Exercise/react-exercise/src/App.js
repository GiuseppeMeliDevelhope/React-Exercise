import { useState } from "react";
import { GithubUser } from "./GithubUser";







export function App (){
   

 const [username, setUsername]= useState('')
       
   
   
     return(
             <div>
               <label>Put in here your Github Username:</label><br/>
                <input value={username} onChange={(e)=> setUsername(e.target.value) } />
                <GithubUser username={username} />
            </div>
        )
    
}