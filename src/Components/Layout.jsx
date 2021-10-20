import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header/>
            <main className="flex-grow md:flex-grow-0 h-screen sm:px-6">{children}</main>
            <Footer/>
            
        </div>
    )
}

export default Layout
