import React from 'react'
import { useState } from 'react'
import AddPost from './AddPost'
import styles from './base.module.css'

function Header() {
  const [openModal, setOpenModal] = useState(false)

  function closeModal() {
    setOpenModal((openModal) => !openModal)
  }
  return (
    <main className={styles.main_container}>
      <div className={styles.header_container}>
        <h1>Practice ContextAPI</h1>
        <button className={styles.btn_close} onClick={() => closeModal()}>
          Close
        </button>
      </div>
      {openModal && <AddPost closeModal={closeModal} />}
    </main>
  )
}

export default Header
