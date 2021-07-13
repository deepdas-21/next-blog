import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/NotFound.module.css'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 4000)
  }, [])

  return (
      <div className={styles.not_found}>
      <h1 className={styles.header}>404</h1>
      <h2>Oops! That page cannot be found :(</h2>
      <p>Redirecting to <Link href="/"><a className={styles.link}>Homepage</a></Link> for more marmite goodness...</p>
    </div>
  );
}
 
export default NotFound;