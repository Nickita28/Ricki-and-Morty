import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // router
import { Card } from 'antd'; // card 
import { Pagination } from 'antd'; // pagination


import './styles.css'


const { Meta } = Card;


const  Home = () => {
 
  const [characters, SetCharacters] = useState(null) // state of characters (all characters)
  const [currentPage, SetCurrentPage] = useState(1) // state of pagination (default current)
  const [pages, SetPages] = useState([]) // state of pagination (total) 
 
  // fetch request to receive character
  useEffect(() =>{
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then(data => data.json())
      .then(res => {
        SetCharacters(res.results)
        SetPages(res.info.pages)
      });
        
  },[currentPage]);

  // fetch request all episodes
  // useEffect(()=> {
  //   fetch('https://rickandmortyapi.com/api/episode')
  //     .then(data => data.json())

  // },[])


  // Output of img characters
  const newCharacters = characters&&characters.map(item =>
    
    <Link  className="card-link" key={item.id} to={`/character/${item.id}`}> 
      <Card
        hoverable
        style={{
          width: 180,
        }}
        cover={<img alt="character" src={item.image} />}
      >
        <Meta title={item.name} description={`status: ${item.status}`} />
      </Card>
    </Link> );


  // function for pagination 
  const onChangeHandler = (e) => {
    SetCurrentPage(e)
  }; 

  return(
    <div className = "home-container">
   
      <div>
        <Pagination defaultCurrent={currentPage} total={pages} onChange={onChangeHandler} />
        {newCharacters}
      </div>
    </div>
  
  )
};


export default Home;