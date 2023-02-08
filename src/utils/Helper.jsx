import React, {useState, useEffect} from 'react';

const BASE_URL = 'https://n-ar93.onrender.com/api';

export const getNannyData = () => {
      //fetch data from server
      const [nannyData, setNannyData] = useState([]);


      useEffect(() => {
            let mounted = true;

            const fetchData = async () => {
                  try{
                        const response = await fetch(`${BASE_URL}/nannies`);
                        const result = await response.json();
                        if(mounted){
                              setNannyData(result);
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

      }, [nannyData]);

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
                        console.log("Error",err)
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


export const submitRequestOrder = async (orderDetails) => {
      try{
            const response = await fetch(`${BASE_URL}/orders`,{
                  method: "POST",
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(orderDetails),
            });
            const result = await response.json();
            //console.log(result);    
            return response;
      }catch(err){
            console.log("Error",err)
      }
}