import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-grow sm:px-6">{children}</main>
            <Footer/>
            
        </div>
    )
}

export default Layout
