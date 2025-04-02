import React from 'react'
import Navbar from '../components/Navbar'
import Start from '../components/Start'
import About from '../components/About'
import MyWorks from '../components/Portfolio'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Start/>
    <About/>
    <MyWorks/>
    </>
  )
}

export default Home