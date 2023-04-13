import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import api from '../utils/Api';
import InfoPage from './InfoPage/InfoPage';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [resorts, setResorts] = React.useState([]);

  React.useEffect(() => {
    api.getResorts(1)
      .then((res) => {setResorts(res.data)})
  }, [])


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/skimon' element={
            <>
              <Header />
              <Main resorts={resorts}/>
              <Footer />
            </>
          }/>
          <Route path='/skimon/:id' element={<InfoPage resorts={resorts}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
