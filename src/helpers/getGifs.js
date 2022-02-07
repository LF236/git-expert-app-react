const getGif = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=AIZ6bCFqeaYDwPUaoQgMWXyVisO6UlKq`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(imagen => {
        return {
            id: imagen.id,
            url: imagen.images?.downsized_medium.url,
            title: imagen.title
        }
    });
    return gifs;
}

export default getGif;