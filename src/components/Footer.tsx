import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {

  const year:number = new Date().getFullYear();

  return (

    <footer className={styles.footer}>
        <p>
            <span>Desenvolvido por</span> Leonardo Cavalcanti &copy; <span>{year}</span>
        </p>
    </footer>
  )
}

export default Footer