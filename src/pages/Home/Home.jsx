import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Search from '../../Components/Search/Search'

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Search />
        </>
    )
}

export default Home