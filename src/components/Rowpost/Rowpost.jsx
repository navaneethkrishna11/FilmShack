import React, { useEffect, useState } from 'react'
import{imageUrl,API_KEY}from '../../constants/constants'
import './rowpost.css'
import axios from '../../axios'
import YouTube from 'react-youtube'
function Rowpost(props) {
    const [movies, setMovies] = useState([]);
    const [urlid,setUrlid]=useState()

    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovies(response.data.results)
        }
        )
        },[])
const opts={
    height:'390',
    width:'100%',
    playerVars:{
        autoplay:1,
    },
};

const handleMovie = (id)=>{
axios.get(`/movie/${id}/videos?api_key=${API_KEY}=en-US`).then(response=>{
           if(response.data.results!==0){
               setUrlid(response.data.results[0])
          }else{
            console.log('image id is not get')
          }
})
}
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter':'poster'}src={`${imageUrl+obj.backdrop_path}`} alt="" />
          )}
       
      </div>
      { urlid && <YouTube opts={opts} videoId={urlid.key}/>}
    </div>
  )
}

export default Rowpost
