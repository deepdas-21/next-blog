import Header from './Header'
import { AuthContextProvider } from '../stores/authContext'

function Layout({ children }) {
    return (
        <AuthContextProvider>
            <div className="container">
                <Header />
                {children}
            </div>
        </AuthContextProvider>
    )
}

export default Layout
