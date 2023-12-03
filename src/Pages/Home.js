import React from 'react'
import Navbar from "../Components/navbar/Navbar"
import Hero from "../../src/Components/Hero/Hero"
import Welcome from '../Components/Welcome/Welcome'
import Footer from '../Components/Footer/Footer'
import Newsletter from '../Components/newsletter/NewsLetter'
import Contact from '../Components/contact/Contact'
function Home() {
  return (
    <>
    <Hero/>
    <Welcome/>
    </>
  )
}

export default Home