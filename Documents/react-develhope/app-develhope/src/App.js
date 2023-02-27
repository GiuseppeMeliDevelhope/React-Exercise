import React from "react";
import { Welcome } from "./Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom"

export function App() {
  return (
    <div>
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Welcome name="Giuseppe" />} />
    </Routes>
  </BrowserRouter>
   
    </div>
    
  )
}