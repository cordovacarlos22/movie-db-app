


export const fetchData = async () => {

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiReadAccessToken = import.meta.env.VITE_APIREADACCESSTOKEN;
  const mbdoApiKey = import.meta.env.VITE_MBDOAPIKEY;

  console.log('API Key:', apiKey); // Should log the value from .env
  console.log('API Read Access Token:', apiReadAccessToken); // Should log the value from .env
  console.log('MBDO API Key:', mbdoApiKey); // Should log the value from .env 

  // ! Fetch data from the API endpoint
  const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
  //?Create the fetch request options
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer  ${apiReadAccessToken}`
    }
  };
  try {
    let response = await fetch(url, options);
    let data = await response.json();
    //? Log the fetched data to the console
    console.log(data);
    localStorage.setItem('movies', JSON.stringify([data]))
  } catch (error) {
    console.error(error);
  }
};









