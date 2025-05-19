import axios from "axios";

    const response = await axios.get('http://omdbapi.com/',{
        params:{
            apikey:'93660f9e',
            s:'avengers'
            }
            })
            if(response.data.Error){
                return[]
            }
            console.log(response.data.Search)
        
        
        fetchData()

export default searchImagenes