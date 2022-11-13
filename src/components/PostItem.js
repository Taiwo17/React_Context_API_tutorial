import styles from './base.module.css'

import AppState from '../context/AppState'
import { useContext } from 'react'

function PostItem({ title, body }) {
  return (
    <li className={styles.list_container}>
      <h2>{title}</h2>
      <p> {body} </p>

      <div>
        <i className='fas fa-edit'></i>
        <i className='fas fa-trash'></i>
      </div>
    </li>
  )
}

export default PostItem
