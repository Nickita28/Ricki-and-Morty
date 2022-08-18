import React from 'react';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Image } from 'antd';


const Character =() => {

  const idCharacter = useParams();// access to to URL character
  const [character, setCharacter] = useState() // state for image character
  const [speciesCharacter, setSpeciesCharacter] = useState() // state for species character
  
  useEffect((id=1) =>{
    fetch(`https://rickandmortyapi.com/api/character/${idCharacter.characterID}`)
      .then(data => data.json())
      .then(res => {
        setCharacter(res.image)
        setSpeciesCharacter(res.species)
      })

  },[idCharacter])
 
  return (
    <>
      { <Image
        width={200}
        src={character}
      />   }

      <h1>Character {idCharacter.characterID}</h1>
      <h2>{speciesCharacter}</h2>
        
    </>
  );
};

export default Character;