import React, {useState, useEffect} from 'react';

const BASE_URL = 'https://n-ar93.onrender.com/api';

export const getNannyData = () => {
      //fetch data from server
      const [nannyData, setNannyData] = useState([]);


      useEffect(() => {

            if (!nannyData.length) {
                  fetch(`${BASE_URL}/nannies`)
                  .then((response) => response.json())
                  .then((data) => {
                        setNannyData(data);
                  })
                  .catch((error) => {
                        console.error('Error:', error);
                  });    
            }
      }, [nannyData]);

      return nannyData;
}

export const getNannyById = (id) => {
      //fetch data from server
      const [nanny, setNanny] = useState({});

      useEffect(() => {

            if (!nanny.id) {
                  fetch(`${BASE_URL}/nannies/${id}`)
                  .then((response) => response.json())
                  .then((data) => {
                        setNanny(data);
                  })
                  .catch((error) => {
                        console.error('Error:', error);
                  });    
            }
           
      }, [nanny, id]);
      return nanny;
}
