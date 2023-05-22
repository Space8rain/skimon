import React from 'react';
import './App.css';
import Main from './main/Main';
import api from '../utils/Api';
import EasterEgg from './easterEgg/EasterEgg';
import InfoPage from './InfoPage/InfoPage';
import PageNotFound from './pageNotFound/PageNotFound';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {

// Получаем от сервера доступные регионы
  const [clusters, setClusters] = React.useState([]);
  React.useLayoutEffect(() => {
    api.getRegions()
      .then((res) => {setClusters(res.data)})
  }, [])

// Стейт с активным регионом
  const [currentCluster, setCurrentCluster] = React.useState({
    id: '',
    name: ''
  });

// Выбираем активный регион
  function handleClusterChange(e) {
    
    setCurrentCluster({
      id: e.target.id,
      name: e.target.title
    })
    // console.dir(e.target.title)
  }

// Получаем от сервера список курортов в активном регионе
  React.useLayoutEffect(() => {
    api.getResorts(currentCluster.id)
      .then((res) => {setResorts(res.data)})
  }, [currentCluster])

// Стейт с доступными курортами
  const [resorts, setResorts] = React.useState([]);

  return (
    <div className="App">
        <Routes>
          <Route exact path='/skimon/'
            element={
            <>
              <Main
                onClick={handleClusterChange}
                currentCluster={currentCluster}
                clusters={clusters}
                resorts={resorts}/>
              <EasterEgg />
            </>
            }/>

          <Route path='/skimon/:id' element={
            <>
              <InfoPage resorts={resorts}/>
              <EasterEgg />
            </>
          }/>

          <Route path='/404' element={<PageNotFound />}/>
          <Route path='*' element={<Navigate replace to='/404' />}/>
        </Routes>
    </div>
  );
}

export default App;
