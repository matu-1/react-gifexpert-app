import React from 'react'
import GifBox from './GifBox';
import useFetchGifs from '../hooks/useFetchGifs';

const GifList = ({categoria}) => {
  // const [images, setImages] = useState([]);
  const {data: images, isLoading} = useFetchGifs(categoria);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{categoria}</h3>
      {isLoading && <p className="animate__animated animate__flash">Cargando...</p>}

      <div className="gif-list">
        {
          images.map(img => (
            <GifBox 
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
   </>
  )
}

export default GifList
