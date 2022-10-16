import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

//css
import styles from "./TaskList.module.css"

//interfaces

import {ITask} from "../interfaces/Task"

interface Props{

  taskList: ITask[]
  handleDelete(id: number): void
  handleEdit(task: ITask): void;
}

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {


  const deleteTask = (id: number) =>{

    handleDelete(id)
  }
  
  return (
    <div className={styles.maxContainer}>
      {taskList.length > 0 ? 
      taskList.map((task, index) =>(

        <div key={index} className={styles.task}>
          <div className={styles.details}>
            <h4>{task.title}</h4>
            <p>Prioridade: <strong>{task.priority}</strong></p>
          </div>
          <div className={styles.actions}>
              <EditIcon onClick={() => handleEdit(task)}className={styles.editIcon}/>
              <DeleteIcon className={styles.deleteIcon} onClick={() => deleteTask(task.id)}/>
          </div>
        </div>
      ))
       : <p>Ainda não há tarefas cadastradas.</p>}
    </div>
  )
}

export default TaskList