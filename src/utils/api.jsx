import axios from 'axios'


const BASE_URL="https://api.themoviedb.org/3"

const TMDB_TOKEN= "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmYwMjE4NzVkMjUyMTUwNjgwNWI1YTQ1MjVlMTk5MyIsInN1YiI6IjY0YTJlM2NlZTlkYTY5MDExZTU3YTJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DCQgONv8Mdo3b6wfBlB5hynK5pz-u0T5uT89nk0etG8"

const headers ={
   Authorization : "bearer " + TMDB_TOKEN,

}

export const fetchDataFromApi = async (url,params)=>{
   try {
      const {data} = await axios.get(BASE_URL + url ,{
        headers,
        params
      })
      return data
   }catch(error){
        console.log(error)
        return error
   }
}