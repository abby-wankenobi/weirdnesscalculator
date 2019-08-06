
export const apiCall = (searchTerm, weirdnessScale, setSearchResult) => {

  const apiKey = "JAw7Fq19sdofijXw7zwZGG6aPD6SWQW0";

  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm}&weirdness=${weirdnessScale}`)
  .then(res => res.json())
  .then(data => {
    setSearchResult(data);
  })
}

export default apiCall;
