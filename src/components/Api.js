export const getres = () => { 
    try{
        return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0e4c4726fcd671c6d9dd8fb5b6a74b0f`,{
            method:"GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTRjNDcyNmZjZDY3MWM2ZDlkZDhmYjViNmE3NGIwZiIsInN1YiI6IjYyNGQ1OTBmMTg4NjRiMDA2YmU3NTE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lhQN17vajv5o0RuWLKcso5EuBPfPR_PGQgPXm9w0_8Y"
              }    
        })
        .then(response => {
          if (response.status === 401) {
            console.log('err ')
          }
          return response.json()
        })
        .then(responseJson => {
          return responseJson;
        })
        .catch(error => {
          return error;
        });
    }
    catch(err){
        return err;
    }
}
export default getres