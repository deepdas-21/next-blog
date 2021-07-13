import styles from '../styles/skeleton.module.css'

export default function Skeleton() {
  return (
      <div className={styles.skeleton}>
      <div className={styles.s_banner}></div>
      <div className={styles.s_header}></div>
      <div className={styles.s_content}></div>
      <div className={styles.s_content}></div>
      <div className={styles.s_content}></div>
    </div>
  )
}
