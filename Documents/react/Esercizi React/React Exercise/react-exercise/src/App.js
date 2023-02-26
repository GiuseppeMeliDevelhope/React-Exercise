import { useState } from "react"
import { FilteredList } from "./FilteredList"

const list = [
    { id: 1, name: "Mario", age: 20 },
    { id: 2, name: "Giuseppe", age: 16 },
    { id: 3, name: "Manuel", age: 25 },
    { id: 4, name: "Andrea", age: 30 },
  ]


  export function App() {
  return (
    <div>
     <div>
      <h2>Filtered List</h2>
      <FilteredList list={list} />
    </div>
    </div>
  )
}