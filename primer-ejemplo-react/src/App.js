import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/NavBar';
import Cards from './components/cards/Cards';
import Presentacion from './components/Presentacion/Presentacion';
import Search from './components/Search/Search'

function App(props) {
  return (
    // <h1>Hola!</h1>
    <>
    <Navbar></Navbar>
    <Search />
    
    <div style= {{display:'flex', justifyItems:'row', justifyContent:'space-around'}}>
            <Cards />
      <Cards  titulo="Card" img="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" texto="valor dentro de la card"/>
      <Cards  titulo="Card" img ="https://images.unsplash.com/photo-1525815732237-469cdd9874ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" texto="valor dentro de la card"/>
      <Presentacion titulo= 'hola' img="https://images.unsplash.com/photo-1470020618177-f49a96241ae7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" texto='estos son tus datos'></Presentacion>
    </div>
    
    </>
  );
}

export default App;
