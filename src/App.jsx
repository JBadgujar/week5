import { useState } from 'react'
import './App.css'
import CreateTodo from '../componenets/CreateTodo'

function App() {

  return (
    <div>
      <CreateTodo /> 
      <Todos />
    </div>
  )
}

export default App
