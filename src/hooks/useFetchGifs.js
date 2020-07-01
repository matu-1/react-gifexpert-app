import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (categoria) => {
  const [state, setstate] = useState({
    data: [],
    isLoading: true,
  });

  useEffect(()=>{
    getGifs(categoria)
      .then(gifs => setstate({
        data: gifs,
        isLoading: false,
      }));
  }, [categoria]);
  
  return state;
}

export default useFetchGifs
