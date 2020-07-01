import React, { useState } from 'react';
import CategoriaAdd from './components/CategoriaAdd';
import GifList from './components/GifList';

const GifExpertApp = props => {
  const [categorias, setCategorias] = useState(["One puch man"]);

  return (
    <div className="container">
      <h1 className="titulo">GifExpertApp</h1>
      <CategoriaAdd setCategorias={setCategorias}/>
      <hr/>
      {
        categorias.map(categoria => (
          <GifList key={categoria} categoria={categoria} />
        ))
      }
    </div>
  )
}

export default GifExpertApp
