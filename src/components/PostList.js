import React, { useContext } from 'react'
import PostItem from './PostItem'
import styles from './base.module.css'
import AppState from '../context/AppState'

function PostList() {
  const { postedUser } = useContext(AppState)
  console.log(postedUser.title)

  return (
    <ul className={styles.list_container}>
      {/* {updatedPost.map((post) => {
        const { id, title, body } = post
        return <PostItem key={id} title={title} body={body} />
      })} */}
    </ul>
  )
}

export default PostList
