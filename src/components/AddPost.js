import React from 'react'
import { useState } from 'react'
import styles from './base.module.css'

function AddPost({ closeModal }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [error, setError] = useState(false)

  function validateInput(e) {
    e.preventDefault()
    if (!title && !body) return setError('All field are required')
    setBody('')
    setTitle('')
    console.log({ title, body })
    closeModal()
  }
  return (
    <div>
      <form action='' onSubmit={validateInput}>
        <div>
          <div>
            <label htmlFor='title'>Title</label>
            <input
              className={styles.input_field}
              type='text'
              placeholder='Enter Your title'
              name=''
              id='title'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='body'>Body</label>
            <textarea
              className={styles.textarea_field}
              name=''
              placeholder='Enter your comment'
              id='body'
              cols='30'
              rows='10'
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button className={styles.btn} type='submit'>
          Submit
        </button>
        {error && <p className={styles.error_message}>{error} </p>}
      </form>
    </div>
  )
}

export default AddPost
