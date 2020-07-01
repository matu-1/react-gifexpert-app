
export const getGifs = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=3O46PIXsNzkaMgtXDmGqplH9oO19svRB&q=${encodeURI(categoria)}&limit=10`;
  let res = await fetch(url);
  let {data} = await res.json();
  let gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url
  }))
  return gifs;
}