//In this file, will write functions to make API calls to fetch the data we need.

import axios from "axios";  //used to make API requests

const url = "https://covid19.mathdro.id/api";   //need url of api

export const fetchData = async () => {
    try{
        //can de-structure the data object as follows to filter the response
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);   
        
        //if the keys have the same name (i.e. confirmed and confirmed), then can omit them
            //from the object value and write confirmed instead of confirmed:confirmed 
        //const modifiedData = { confirmed, recovered, deaths, lastUpdate };
        
        //don't need modifiedObject data, can simply return the Object
        return { confirmed, recovered, deaths, lastUpdate };    

        //console.log(response);
    } catch (error){

    }
}
