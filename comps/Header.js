import styles from '../styles/Header.module.css';
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react';
import AuthContext from '../stores/authContext';


function Header() {

    const {user, login, logout, authReady} = useContext(AuthContext)

    return (
        <div className={styles.header}>
            <Image src="/dummy-logo.png" width={90} height={90} alt="Logo" />
            <div className={styles.nav_links}>
                <Link href="/">Home</Link>
                <Link href="/blogs">Blogs</Link>
                {authReady && !user && <button className={styles.btn} onClick={login}>Login/Signup</button>}
                {authReady && user && <p>{ user.email }</p>}
                {authReady && user && <button className={styles.btn} onClick={logout}>Log out</button>}
            </div>
        </div>
    )
}

export default Header
