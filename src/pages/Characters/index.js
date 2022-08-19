import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Card } from 'antd'; 
import NavBar from '../../components/NavBar'; 

import {getLastStrItem} from '../utils'

import './characters-styles.css'

const { Meta } = Card;


const  Characters = () => {

  const [test,setTest]= useState(1)
  const [characters,setCharacters] = useState()
  const [episodes,setEpisodes] = useState([]) // state of all episodes


  useEffect(() => {

    fetch(`https://rickandmortyapi.com/api/episode/${test}`)
      .then(data => data.json())
      .then(res =>{
        const episodeId = (res.characters.map(item => getLastStrItem(item,'/')))
        fetch(`https://rickandmortyapi.com/api/character/${episodeId}`)
          .then(data => data.json())
          .then(res =>setCharacters(res))

      })



    },[test])




  // fetch request all episodes(navbar)
  useEffect(()=> {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(data => data.json())
      .then(res => setEpisodes(res.results))
  },[])



  //Output of img characters
  const newCharacters = characters && characters.map(item =>
    <Link  className="card-link" key={item.id} to={`/character/${item.id}`}> 
      <Card className="card-img"
       hoverable
       style={{
         width: 220,
       }}
        cover={<img alt="character" src={item.image} />}
      >
        <Meta title={item.name} description={`status: ${item.status}`} />
      </Card>
    </Link> );




  return(
    <div className = "home-container">
      <div className="nav-bar">
        <NavBar allEpisodes={episodes} setTest={setTest}/> 
    
      <div className="card-container"> {newCharacters}  </div>
      </div>
    </div>

  )
};


export default Characters;