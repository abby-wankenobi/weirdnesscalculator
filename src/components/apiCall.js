
export const apiCall = () => {

  var apiKey = "JAw7Fq19sdofijXw7zwZGG6aPD6SWQW0"

   fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=PG`)
  .then(response=>{
    return response.json();
  })
  .then(data=>{
    arg(data)
  })

}

export default apiCall;
