import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl}from '../../constants/constants'
import axios from '../../axios'
import { create, all } from 'mathjs'
import './banner.css'
function Banner() {
  const [movie,setMovie] =useState()
  const math = create(all)
  useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
  
        const randomIndex=math.floor(Math.random()*response.data.results.length);
        setMovie(response.data.results[randomIndex])

      })

  }, [])
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
  }
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}} className='banner'>
        <div className="content" >
            <h1 className="title">{movie ? movie.title :"Raxveror"}</h1>
                    <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
            <h1 className="description" >{movie ? truncateString(movie.overview,500) :''}</h1>
        </div>
        <div className="fade"></div>
      
    </div>
  )
}

export default Banner
