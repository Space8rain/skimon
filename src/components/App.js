import React from 'react';
import './App.css';
import Main from './main/Main';
import api from '../utils/Api';
import EasterEgg from './easterEgg/EasterEgg';
import InfoPage from './InfoPage/InfoPage';
import PageNotFound from './pageNotFound/PageNotFound';
import ScrollButton from './scrollButton/ScrollButton';
import { Route, Routes, Navigate, } from 'react-router-dom';
import Skeleton from './skeleton/Skeleton';

function App() {

// Стейт устройства
  const [device, setDevice] = React.useState('desktop');

// Состояние загрузки данных
  const [isLoading, setIsLoading] = React.useState(true);

// Изначально проверяем тип устройства
  React.useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {
      setDevice('mobile');
    };
  }, [])

// Получаем от сервера доступные кластеры регионов
  const [clusters, setClusters] = React.useState([]);
  React.useLayoutEffect(() => {
    api.getClusters()
      .then((res) => {
        setClusters(res.data);
      })
  }, [])

// Стейт с активным кластером регионов
  const [currentCluster, setCurrentCluster] = React.useState(
    JSON.parse(window.localStorage.getItem('currentCluster')) 
    ? {
      id: JSON.parse(window.localStorage.getItem('currentCluster')).id,
      name: JSON.parse(window.localStorage.getItem('currentCluster')).name,
      cluster_alias: JSON.parse(window.localStorage.getItem('currentCluster')).cluster_alias
    } : {
    id: 1,
    name: 'Московская область',
    cluster_alias: 'msk'
  });

// Выбираем активный кластер регионов
  function handleClusterChange(e) {
    console.dir(currentCluster.cluster_alias)
    setCurrentCluster({
      id: e.target.id,
      name: e.target.title,
      cluster_alias: e.target.attributes.alias.value
    })
    window.localStorage.setItem('currentCluster', JSON.stringify(currentCluster))
  }

  React.useEffect(() => {
    window.localStorage.setItem('currentCluster', JSON.stringify(currentCluster))
  }, [currentCluster])

// Стейт с доступными курортами в активном кластере регионов
  const [resorts, setResorts] = React.useState([]);

// Получаем от сервера список курортов в активном кластере регионов
  React.useLayoutEffect(() => {
    api.getResorts(currentCluster.id)
      .then((res) => {
        setResorts(res.data);
        setIsLoading(false);
      })
  }, [currentCluster])

  return (
    <div className="App">
        <Routes>
          <Route path={`/:cluster_alias`}
            element={
            <>
              <Main
                onClick={handleClusterChange}
                currentCluster={currentCluster}
                clusters={clusters}
                resorts={resorts}
                isLoading={isLoading}/>
              <ScrollButton />
              <EasterEgg />
            </>
            }/>

          <Route path='/:cluster_alias/:resort_alias' element={
            <>
              <InfoPage resorts={resorts} device={device} isLoading={isLoading} currentCluster={currentCluster}/>
              <ScrollButton />
              <EasterEgg />
            </>
          }/>

          <Route path='/404' element={<PageNotFound currentCluster={currentCluster}/>}/>
          <Route path='/*' element={<Navigate replace to='/404' />}/>
        </Routes>
    </div>
  );
}

export default App;
