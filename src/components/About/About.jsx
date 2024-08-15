import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import nk from './navaneeth.jpg'
import { Helmet } from 'react-helmet'

function About() {
  return (
    <div>
      <Helmet>
      <title>
        About
        </title>
      </Helmet>
      <Navbar/>
        <div className="containerAbout">
          <div className="containerSide1">
            <center>
          <h1>About Us</h1>
          </center>
          <br />
          
          <p>

Welcome to <b>FilmShack</b>, the ultimate cross-platform destination for film and series enthusiasts! At FilmShack, our goal is to bring together the best of cinematic entertainment in one sleek, user-friendly interface that seamlessly operates across devices. Currently, the platform is focused on the frontend, boasting a dynamic and modern design developed using React.js, enhanced by powerful CSS tools for a visually stunning user experience. Whether you’re a movie buff or a series binge-watcher, FilmShack is crafted to serve your entertainment needs.

With FilmShack, exploring movies has never been easier. Leveraging the powerful TMDb API, we present a comprehensive list of films and series for you to discover. Our design focuses on a smooth and intuitive experience, helping users find their next favorite title effortlessly. Though still in its initial stages, FilmShack showcases the potential of being a robust platform to explore all kinds of visual entertainment.

As FilmShack is continuously evolving, we’re currently focused on refining the frontend design, ensuring that each element is tailored for maximum engagement and ease of use. This is just the beginning — stay tuned as we aim to expand our capabilities and make FilmShack a fully-fledged platform that meets the diverse needs of movie lovers everywhere.
          </p>
          </div>
          <center>
          <h1 style={{ color: "aliceblue",fontFamily:'Georgia,Times New Roman, Times, serif',padding:'30px 0px 0px 31px'}}>About Owner</h1>
          </center>
          <div className="containerSide2">
            
          <div className="side2part1">
            <img src={nk} alt="error" style={{width:"200px",height:'300px',borderRadius:'4%'}} />
           
          </div>
          <div className="side2part2">
              <h1>Navaneeth Krishna</h1>
              <h2>Software Engineer</h2>
              <p>
Hi everyone! Welcome to this demo website, a project that I developed as part of 
my engineering studies. This site serves as a practice work aimed at honing my skills 
in frontend development, especially using modern web technologies. Built primarily with React.js,
 this project showcases my understanding and application of key concepts in web development.
  I have utilized React.js hooks to manage state and handle component lifecycle events effectively,
   ensuring a smooth and dynamic user experience. The design of this site is centered around simplicity
    and aesthetics, with CSS being the main styling tool to create a visually engaging interface.
    This project reflects my focus on frontend design and demonstrates how versatile React.js can be 
    when combined with clean and responsive CSS layouts. Though simple, this project is an excellent 
    representation of my dedication to learning and improving as a developer,
 with each aspect thoughtfully implemented to build a cohesive user experience.
              </p>
          </div>
          </div>
        </div>
        <br />
        <br />

     <Footer/>
    </div>
  )
}

export default About
