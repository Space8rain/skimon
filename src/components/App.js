import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import api from '../utils/Api';
import InfoPage from './InfoPage/InfoPage';
import PageNotFound from './pageNotFound/PageNotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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

          <Route exact path='/skimon/' element={
            <>
              <Header />
              <Main resorts={resorts}/>
              <Footer />
            </>
          }/>

          <Route path='/skimon/:id' element={
            <>
            <InfoPage resorts={resorts}/>
            <Footer />
            </>
          }/>

          <Route path='*' element={
            <>
              <PageNotFound />
              <Footer />
            </>
          }/>

          <Route path='skimon/not-found' element={
            <>
              <PageNotFound />
              <Footer />
            </>
          }/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
