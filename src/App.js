import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Walk from './pages/Walk';
import MapDetails from './pages/MapDetails';
import MapSearchResult from './pages/MapSearchResult';
import Cycle from './pages/Cycle';
import Hiking from './pages/Hiking';
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
            <Route path=':mapId' element={ <MapDetails/> }/> 
            <Route path='search' element={ <MapSearchResult/> }/>
          </Route>
          <Route path='cycle' element={ <Cycle/> } />
          <Route path='hiking' element={ <Hiking/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
