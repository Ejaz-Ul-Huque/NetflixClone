import React from 'react'
import Banner from '../Components/Banner'
import Navbar from '../Components/Navbar'
import Row from '../Components/Row'

function Homescreen() {
  return (
    <div className="bg-[url('https://wallpaperaccess.com/full/1223720.jpg')] bg-cove">
        <Navbar />
        <Banner />
        <div className=' max-w-[100rem] mx-auto py-12'>
        <Row title={"Netflix Orignals"}  />
        <Row title={"Trending"}  />
        <Row title={"Top Rated"}  />
        <Row title={"Action"}  />
        <Row title={"Romance"}  />
        <Row title={"Comedy"}  />
        <Row title={"Documentries"}  />
        <Row title={"Horror"}  />
        <Row title={"Sci-Fi"}  />
        </div>

    </div>
  )
}

export default Homescreen