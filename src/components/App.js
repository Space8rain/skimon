import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import api from '../utils/Api';
import InfoPage from './InfoPage/InfoPage';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [resorts, setResorts] = React.useState([]);

  React.useEffect(() => {
    api.getResorts(1)
      .then((res) => {setResorts(res.data)})
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/skimon' element={
          <>
            <Header />
            <Main resorts={resorts}/>
            <Footer />
          </>} 
        />
        <Route path='/skimon/infoPage' element={<InfoPage />}/>
      </Routes>
      {/* <Header />
      <Main resorts={resorts}/>
      <Footer />
      <InfoPage /> */}
    </div>
  );
}

export default App;
