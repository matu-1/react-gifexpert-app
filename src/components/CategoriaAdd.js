import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoriaAdd = ({setCategorias}) => {
  const [valor, setValor] = useState('');
  
  const categoriaChange = e => {
    setValor(e.target.value);
  }
  const agregar = e => { //submit
    e.preventDefault();
    if(valor.trim().length <= 2) return;
    setCategorias(value => [valor, ...value]);
    setValor('');
  }
  return (
    <form onSubmit={agregar}>
      <input 
        type="text" 
        value={valor}
        onChange={categoriaChange}
      />
    </form>
  )
}

CategoriaAdd.propTypes = {
  setCategorias: PropTypes.func.isRequired
}

export default CategoriaAdd