import React from 'react'
import styles from "./Modal.module.css"
import CloseIcon from '@mui/icons-material/Close';


interface Props{

    children: React.ReactNode
}

const Modal = ({children}: Props) => {


    const closeModal = (e: React.MouseEvent):void =>{

        const modal = document.querySelector("#modal");
        modal!.classList.add("hide");
    }

  return (
    <div id="modal" className="hide">
        <div className={styles.fade} onClick={closeModal}></div>
        <div className={styles.modal}>
            <div onClick={closeModal} className={styles.closeModal}><CloseIcon className={styles.closeIcon}/></div>
            <h2>Editando tarefa</h2>
            {children}
        </div>
    </div>
  )
}

export default Modal