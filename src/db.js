export const fetchData = async (category, page = 1) => {

  // const apiKey = import.meta.env.VITE_API_KEY;
  const apiReadAccessToken = import.meta.env.VITE_APIREADACCESSTOKEN;

  // ! Fetch data from the API endpoint
  const url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`;
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
    // console.log(data);
    sessionStorage.setItem(`${category}`, JSON.stringify([data]))
  } catch (error) {
    console.error(error);
    alert(error);
  }
};
