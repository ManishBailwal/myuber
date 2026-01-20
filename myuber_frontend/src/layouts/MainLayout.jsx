import {Outlet} from 'react-router-dom'

export const MainLayout = ()=>{
    return (
        <div className="app-shell">

            <header>
                Header/sidebar
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>
                Footer
            </footer>

        </div>
    )
}