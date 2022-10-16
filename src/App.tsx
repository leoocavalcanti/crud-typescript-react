import React from 'react'
import Footer from './components/Footer'
import "./index.css"
import Home from './components/Home'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Modal from './components/Modal'

//interfaces
import { ITask } from "./interfaces/Task"

const App = () => {

  const [taskList, setTaskList] = React.useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = React.useState<ITask | null>(null)

  const deleteTask = (id: number) =>{

    const filtered = taskList.filter((task) => task.id !== id)
    setTaskList(filtered);
      
  }

  const hideOrShowModal = (display: boolean) =>{

    const modal = document.querySelector("#modal");
    if(display){

      modal!.classList.remove("hide")
    }

    else{

      modal!.classList.add("hide")
    }
  }

  const editTask = (task: ITask): void =>{

    hideOrShowModal(true);
    setTaskToUpdate(task)
  }

  const updateTask = (id: number, title: string, priority: string) =>{

    const updatedTask: ITask = {id, title, priority}
    const updatedItems = taskList.map((task) =>{

      return task.id === updatedTask.id ? updatedTask : task
    })

    setTaskList(updatedItems);
    hideOrShowModal(false)
    

  }

  return (
    <div>
      <Modal children={<TaskForm btnText="Editar tarefa" task={taskToUpdate} taskList={taskList} handleUpdate={updateTask}/>}/>
      <Home/>
      <main className="main">
        <div>
          <h2 className="title">Escreva seus planos para hoje...</h2>
          <TaskForm 
          btnText="Adicionar tarefa" 
          taskList={taskList} setTaskList={setTaskList} 
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList 
          taskList={taskList} 
          handleDelete={deleteTask} 
          handleEdit={editTask}/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App