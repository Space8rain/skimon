// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import api from '../utils/Api';

function App() {

  const [resorts, setResorts] = React.useState([]);

  React.useEffect(() => {
    api.getResorts(1)
      .then((res) => {setResorts(res.data)})
  }, [])

  return (
    <div className="App">
      <Header />
      <Main resorts={resorts}/>
      <Footer />
    </div>
  );
}

export default App;
