import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ItemListContainer greeting="Bienvenido a mi tienda" />
    </div>
  );
}

export default App;