import React, { useState } from 'react'
import Form from './Form'
import Todos from './Todos'

const App = () => {
  const [todos, setTodos] = useState([{
    id:1,
    title:"MORNING WORKOUT",
    description:"Jumping jacks-50, Push ups-25, Crunches-50"
  },
  {
    id:2,
    title:"PREP MY MEAL",
    description:"Scrambled eggs, Vegetable salad, Greek yogurt"
  },
  {
    id:3,
    title:"STUDY",
    description:"Web development-NODEJS, Operating system"
  },
])

const [id, setId] = useState("")

const deleteTodo = (id) =>{
  setTodos(todos.filter((d)=>d.id != id))
}
  return (
    <div>
      <div className="container">
        <h1 className='text-center'>To do List</h1>
        <Form todos={todos} setTodos={setTodos} id={id} setId={setId}/>
        <Todos todos={todos} deleteTodo={deleteTodo} setId={setId}/>
      </div>
    </div>
  )
}

export default App
