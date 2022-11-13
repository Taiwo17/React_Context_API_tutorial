import Header from './components/Header'
import styles from '../src/components/base.module.css'
import { AppProvider } from './context/AppState'
import PostList from './components/PostList'

function App() {
  return (
    <AppProvider>
      <div className={styles.app_container}>
        <Header />
        <h3>
          New Post <span>3</span>
        </h3>
        <PostList />
      </div>
    </AppProvider>
  )
}

export default App
