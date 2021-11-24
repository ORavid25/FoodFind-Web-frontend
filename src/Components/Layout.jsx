import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
    return (
        <div className="min-h-screen min-w-screen flex flex-col bg-white">
            <Header/>
            <main className="container flex-grow h-screen w-full  md:flex-col  sm:px-6">{children}</main>
            <Footer/>
            
        </div>
    )
}

export default Layout
