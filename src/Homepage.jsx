import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';
import { orginals,actions, adventure, love, horror, doccumentries, comedy } from './urls';
import Footer from './components/Footer/Footer';
import { Helmet } from 'react-helmet';
import Rowone from './components/rowone/Rowone';
import Rowtwo from './components/RowTwo/Rowtwo';

function Homepage() {
  return (
    <div className="App">
      <Helmet><title>
        FilmShack
      </title>
      </Helmet>
      <Navbar/>
      <Banner/>
      <Rowpost url={orginals} title='FilmShack Orginals'/>
      <Rowpost url={actions} title='Action' isSmall/>
      <Rowpost url={horror} title='Horror' isSmall/>
      <Rowpost url={love} title='Love' isSmall/>
      <Rowpost url={comedy} title='Comedy' isSmall/>
      <Rowpost url={doccumentries} title='Docummentries' isSmall/>

     <Rowone/>
     <Rowtwo/>


      <Footer/>
    </div>
  )
}

export default Homepage
