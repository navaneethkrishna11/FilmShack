import React from 'react'
import './Movies.css'
import Navbar from '../Navbar/Navbar'
import { orginals,actions, adventure, love, horror, doccumentries, comedy } from '../../urls';
import Rowpost from '../../components/Rowpost/Rowpost';
import { color } from 'framer-motion';
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet';

function Movies() {
  return (
    <div>
      <Helmet>
        <title>
        Movies
        </title>
      </Helmet>
      <Navbar/>

      <div className="containerMovies">
        <marquee behavior="" direction="left" className="marq">
          Action &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Horror &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          Love &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Comedy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           Docummentries</marquee>

           <marquee behavior="" direction="right" className="marq1" >
          Action &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Horror &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          Love &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Comedy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           Docummentries</marquee>
      <Rowpost url={actions} title='Action' />
      <Rowpost url={horror} title='Horror' />
      <Rowpost url={love} title='Love' />
      <Rowpost url={comedy} title='Comedy' />
      <Rowpost url={doccumentries} title='Docummentries'/>
      </div>
        
        <Footer/>
      
    </div>
  )
}

export default Movies
