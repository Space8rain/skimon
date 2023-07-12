import React, { Suspense } from 'react';
import './App.css';
import { MainPageAsync } from '../pages/mainPage/MainPage.async';
import api from '../utils/Api';
import EasterEgg from './easterEgg/EasterEgg';
import { InfoPageAsync } from '../pages/InfoPage/InfoPage.async';
import { NotFoundPageAsync } from '../pages/NotFoundPage/NotFoundPage.async';
import ScrollButton from './scrollButton/ScrollButton';
import { Route, Routes, Navigate } from 'react-router-dom';


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
  const [currentCluster, setCurrentCluster] = React.useState({});

// Выбираем активный кластер регионов
  function handleClusterChange(e) {
    setCurrentCluster({
      id: e.target.id,
      name: e.target.title,
      cluster_alias: e.target.attributes.alias.value
    })
  };

// Стейт с доступными курортами в активном кластере регионов
  const [resorts, setResorts] = React.useState();

// Получаем от сервера список курортов в активном кластере регионов
  React.useEffect(() => {
    api.getResorts(currentCluster.id)
      .then((res) => {
        setResorts(res.data);
        setIsLoading(false);
      })
  }, [currentCluster]);

  return (
    <div className="App">
      <Suspense>
        <Routes>
          <Route path='/:cluster_alias'
            element={
            <>
              <MainPageAsync
                onClick={handleClusterChange}
                currentCluster={currentCluster}
                clusters={clusters}
                resorts={resorts}
                isLoading={isLoading}
                setCurrentCluster={setCurrentCluster}
                />
              <ScrollButton />
              <EasterEgg />
            </>
            }/>

          <Route path='/:cluster_alias/:resort_alias' element={
            <>
              <InfoPageAsync
                resorts={resorts}
                clusters={clusters}
                setCurrentCluster={setCurrentCluster}
                device={device}
                isLoading={isLoading}
                currentCluster={currentCluster}/>
              <ScrollButton />
              <EasterEgg />
            </>
          }/>

          <Route path='/404' element={<NotFoundPageAsync currentCluster={currentCluster}/>}/>
          <Route path='/*' element={<Navigate replace to='/msk' />}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;