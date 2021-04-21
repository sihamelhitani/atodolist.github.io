import React from 'react'
import { useState, useRef } from 'react'
import './style/style.css';



function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const inputTask = useRef(null)
  const addTask = () => {
    setTodoList([...todoList, currentTask]);
    inputTask.current.value = "";
  }
  const deleteTask = (taskToDelete) => {
    setTodoList(
      todoList.filter((task) => {
        return task !== taskToDelete;
      })
    )
  }
  
  return (
    <div>
      <div className="App">
        <h1>Todo list</h1>
        <div>
          <input onKeyDown={(event) => {
            if (event.keyCode === 13) {
              addTask();
            }
          }}
          ref={inputTask} 
          type="text" 
          placeholder="task..." 
          onChange={(event)=> {
            setCurrentTask(event.target.value);
          }}/>
          <button 
          onClick={addTask}>
            Add task
            </button>
        </div>
        <div className="theTasks">
          <ul>
            {todoList.map((val, key)=> {
              return (
                

              
                <div className="line">
                  <li key={key}> {val}</li>
                  <button className="deleteButton" onClick={ ()=> deleteTask(val) }>Delete</button>
                </div>
                
              )
            })}
            
          </ul> 
          
          

        </div>
      </div>
      
      
    </div>
  
  );
}

export default App;
