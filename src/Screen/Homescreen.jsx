import React from 'react';
import { useEffect } from 'react';
import Banner from '../Components/Banner';
import Navbar from '../Components/Navbar';
import Row from '../Components/Row';
// import axios from 'axios';
import requests from '../Requests';

function Homescreen() {

  // useEffect(()=>{
  //   axios.get('https://api.themoviedb.org/3/movie/550?api_key=e8ab91b21b368fbc8e4eca430e357342')
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // },[])
  

  return (
    <div className='bg-black' >
        <Navbar />
        <Banner />
        <div className=' max-w-[100rem] mx-auto px-6 py-12'>
        <Row title={"Netflix Orignals"} fetchUrl={requests.fetchNetflixOriginals}   />
        <Row title={"Trending"} fetchUrl={requests.fetchTrending}  />
        <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
        <Row title={"Action"} fetchUrl={requests.fetchActionMovies} />
        <Row title={"Romance"} fetchUrl={requests.fetchRomanceMovies} />
        <Row title={"Comedy"} fetchUrl={requests.fetchComedyMovies} />
        <Row title={"Documentries"} fetchUrl={requests.fetchDocumentaries} />
        <Row title={"Horror"} fetchUrl={requests.fetchHorrorMovies} />
        </div>

    </div>
  )
}

export default Homescreen