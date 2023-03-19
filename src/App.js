import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Walk from './pages/Walk';
import WalkDetails from './pages/WalkDetails';
import WalkSearchResult from './pages/WalkSearchResult';
import Hiking from './pages/Hiking';
import HikingDetails from './pages/HikingDetails';
import HikingSearchResult from './pages/HikingSearchResult.js';
import './base.css';
import './reset.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Main /> } />
          <Route path='walk'>
            <Route index element={ <Walk/> }/>
            <Route path=':mapId' element={ <WalkDetails/> }/> 
            <Route path='search' element={ <WalkSearchResult/> }/>
          </Route>
          <Route path='Hiking'>
            <Route index element={ <Hiking/> }/>
            <Route path=':mapId' element={ <HikingDetails/> }/> 
            <Route path='search' element={ <HikingSearchResult/> }/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
