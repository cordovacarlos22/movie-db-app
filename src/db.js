/**
 * The `fetchData` function fetches movie data from a specified category using an API endpoint and
 * stores the data in session storage.
 * @param category - The `category` parameter in the `fetchData` function represents the type of movie
 * data you want to fetch from the API. It could be a specific category like "popular", "top_rated",
 * "now_playing", or any other category available in the API. This parameter is used to construct
 * @param [page=1] - The `page` parameter in the `fetchData` function is used to specify the page
 * number of results to retrieve from the API. By default, it is set to 1 if not provided when calling
 * the function. This allows you to fetch data from different pages of the API endpoint, especially
 * useful
 */
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
