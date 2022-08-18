import React, { useState } from 'react';
import { Menu } from 'antd';



const  NavBar = ({allEpisodes, setTest}) =>  {
  

  const episodes = allEpisodes&&allEpisodes.map(item =>
    <Menu.Item key={item.id} >
      {item.name}
    </Menu.Item>  
  )

  const onSubmitMenu = (value) =>{

    return setTest(value.key)
  }


  return (
    <Menu mode="vertical" onClick={onSubmitMenu} >
      {episodes}
    </Menu>
  )
};

export default NavBar;