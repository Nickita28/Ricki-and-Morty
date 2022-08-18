import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Character from './pages/Character';
import Characters from './pages/Characters';
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import Header from './components/Header'

import 'antd/dist/antd.less';

const App = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path= "Character/:characterID" element={<Character/>} />
        <Route path= "Characters" element={<Characters/>} />
        <Route path= "*" element={<NotFound/>} />

      </Routes>
    
    </BrowserRouter>
 
   
  )
}

export default App;
