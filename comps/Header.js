import styles from '../styles/Header.module.css';
import Image from 'next/image'
import Link from 'next/link'

function Header() {
    return (
        <div className={styles.header}>
            <Image src="/dummy-logo.png" width={90} height={90} alt="Logo" />
            <div className={styles.nav_links}>
                <Link href="/">Home</Link>
                <Link href="/blogs">Blogs</Link>
                <p>Login/Signup</p>
            </div>
        </div>
    )
}

export default Header
