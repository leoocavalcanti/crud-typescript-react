import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'
import styles from "./TaskForm.module.css"
import { ITask } from "../interfaces/Task"
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

interface Props{

  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
  task?: ITask | null
  handleUpdate?(id: number, title: string, priority: string): void
}

const TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}: Props) => {


  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("");
  const [priority, setPriority] = useState<string>("Baixa");

  useEffect(() => {

    if(task){

      setId(task.id);
      setTitle(task.title)
      setPriority(task.priority)
    }

  }, [task])

  const addTask = (e: FormEvent<HTMLFormElement>) => {

      e.preventDefault();
      if(handleUpdate){

        handleUpdate(id, title, priority)
      }
      else{
        const newTask: ITask = {id, title, priority};
        setTaskList!([...taskList, newTask]);
        setId(id + 1);
        setTitle("");
        setPriority("Baixa");
      }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) =>{

    if(e.target.name === "title"){

      setTitle(e.target.value);
    }

    else{

      setPriority(e.target.value);
    }

  }

  return (
    <form onSubmit={addTask} className={styles.form}>
      <div className={styles.input_container}>
        <label>
          <span>Título:</span>
          <input maxLength={60} required onChange={handleChange} value={title} type="text" name="title" placeholder="Título da tarefa"/>
        </label>
      </div>
      <div className={styles.input_container}>
          <label>
            <span>Prioridade:</span>
            <select style={{cursor: "pointer"}}required onChange={handleChange} value={priority} name="priority">
              <option value="Baixa">Baixa</option>
              <option value="Média">Média</option>
              <option value="Alta">Alta</option>
            </select>
          </label>
          
      </div>
      {btnText === "Adicionar tarefa" && <button id="button">{btnText} <AddIcon className={styles.addBtn}/></button>}
      {btnText === "Editar tarefa" && <button style={{backgroundColor: "#EEAD2D"}} id="button">{btnText} <EditIcon className={styles.addBtn}/></button>}
      
    </form>
  )
}

export default TaskForm