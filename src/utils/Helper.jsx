import React, {useState, useEffect} from 'react';

const BASE_URL = 'https://n-ar93.onrender.com/api';

export const getNannyData = (page=1, limit=10) => {
      //fetch data from server
      const [nannyData, setNannyData] = useState([]);

      useEffect(() => {
            let mounted = true;

            const fetchData = async () => {
                  try{
                        //console.log("toServer:", page, limit)
                        const response = await fetch(`${BASE_URL}/nannies?page=${page}&limit=${limit}`);
                        const result = await response.json();

                        if(mounted){
                              setNannyData(result.data.results);
                        }
                  }catch(err){
                        console.log("Error",err)
                  }
            }
            if (!nannyData.length) {
                  fetchData();  
            }

            return () => {
                  mounted = false;
      
            }

      }, [nannyData,page]);

      return nannyData;
}

export const getNannyById = (id) => {
      //fetch data from server
      const [nanny, setNanny] = useState({});

      useEffect(() => {

            let mounted = true;
            const fetchData = async () => {

                  try{
                        const response = await fetch(`${BASE_URL}/nannies/${id}`);
                        const result = await response.json();

                        if(mounted){
                              setNanny(result);
                        }
                  }catch(err){
                        console.log("Error",err.message)
                  }
            }

            if (id && Object.keys(nanny).length === 0) {
                  fetchData();
            }

            return () => {
                  mounted = false;
            }
           
      }, [id, nanny]);

      return nanny;
}

export const updateNanny = async (id, data) => {
      try{
            const response = await fetch(`${BASE_URL}/nannies/${id}`,{
                  method: "PATCH",
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data),
            });
            const result = await response.json();
            //console.log(result);    
            return response;
      }catch(err){
            console.log("Error",err)
      }
}


export const submitRequests = async (data) => {
      try{
            const response = await fetch(`${BASE_URL}/orders`,{
                  method: "POST",
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data),
            });
            const result = await response.json();
            //console.log(result);    
            return response;
      }catch(err){
            console.log("Error",err)
      }
}


export const submitFormApplication = async (data) => {
      try{
            const response = await fetch(`${BASE_URL}/nannies/apply`,{
                  method: "POST",
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data),
            });
            const result = await response.json();
            //console.log(result);    
            return response;
      }catch(err){
            console.log("Error",err)
      }
}

export const checkout = async (data) => {
      try{
            const response = await fetch(`${BASE_URL}/mpesa/pay`, {
                  method: "POST",
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
            })

            const result = await response.json();

            return response;

      }catch(error){
            console.log("Error", error);
      }
}



//handle pagination buttons
export const handlePaginateButton = (e) => {

      const [prevPage, setPrevPage] = useState(1);
      const [nextPage, setNextPage] = useState(prevPage + 1);
      const {name, value} = e.target

      if (name === "next" && value < nextPage){
            setPrevPage(prevPage + 1);
            setNextPage(nextPage + 1);
      }

      if (name === "prev" && value >= prevPage ){
            setPrevPage(prevPage - 1);
            setNextPage(nextPage - 1);
      }

      //console.log(`prev: ${prevPage} next: ${nextPage}`);
      return {prevPage, nextPage};
}
