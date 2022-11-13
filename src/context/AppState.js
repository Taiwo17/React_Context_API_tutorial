import { createContext, useState } from 'react'

import React from 'react'

// Define the value first
const posts = [
  {
    id: 1,
    title: 'The Sugar Daddy',
    body: `Am the Sugar Daddy, you are talking about`,
  },
  {
    id: 2,
    title: 'The Sugar Boy',
    body: `Am the Sugar Boy, you are talking about`,
  },
  {
    id: 3,
    title: 'The Sugar Momma',
    body: `Am the Sugar Momma, you are talking about`,
  },
  {
    id: 4,
    title: 'The Sugar Boy',
    body: `Am the Sugar Boy, you are talking about`,
  },
]
// Insert the value into createContext
const AppState = createContext({ posts })

export function AppProvider({ children }) {
  const [updatedPost, setUpdatedPost] = useState(posts)

  const postedUser = updatedPost.map((user) => {
    const { id, title, body } = user
    return (
      <div key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    )
  })

  return (
    <div>
      <AppState.Provider value={{ postedUser }}>{children}</AppState.Provider>
    </div>
  )
}

export default AppState
