import React, {useState, useEffect} from 'react';
import { useToken } from '../auth/useToken';

export const BASE_URL = window.location.hostname === 'localhost' ?
                         'http://localhost:8000/api' : 
                         'https://n-ar93.onrender.com/api'

export const getNannyData = () => {
      //fetch data from server
      const [nannyData, setNannyData] = useState([]);

      useEffect(() => {
            let mounted = true;

            const fetchData = async () => {
                  try{
                        //console.log("toServer:", page, limit)
                        const response = await fetch(`${BASE_URL}/nannies`);
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

      }, [nannyData]);

      return nannyData;
}

//get verified nannies
export const filterVerifiedNannyData = (nannies) => {
      const verifiedNannies = nannies.filter(nanny => nanny.verified === true);
      const verifiedNanniesCount = verifiedNannies.length;

      return {verifiedNannies, verifiedNanniesCount};
}

//get approved nannies
export const filterApprovedNannyData = (nannies) => {
      const approvedNannies = nannies.filter(nanny => nanny.approved === true);
      const approvedNanniesCount = approvedNannies.length;


      return {approvedNannies, approvedNanniesCount};
}

//get unapproved nannies
export const filterUnapprovedNannyData = (nannies) => {
      const unapprovedNannies = nannies.filter(nanny => nanny.approved === false);
      const unapprovedNanniesCount = unapprovedNannies.length;

      return {unapprovedNannies, unapprovedNanniesCount};
}

//filter booked nannies
export const filterBookedNannyData = (nannies) => {
      const bookedNannies = nannies.filter(nanny => nanny.booked === true);
      const bookedNanniesCount = bookedNannies.length;

      return {bookedNannies, bookedNanniesCount};
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
            console.log("Error",err);
      }
}

/////////////////////////////////////////////////////////////////////////////////

//get payment data
export const getPaymentData = async () => {

      const [payments, setPayments] = useState([]);
      //get token from local storage
      const token = localStorage.getItem('token');

      useEffect(() => {
            let mounted = true;

            const fetchData = async () => {
                  try{
                        const response = await fetch(`${BASE_URL}/mpesa/payments`, {
                              method: "GET",
                              headers: {
                                    'Content-Type': 'application/json',
                                    'x-access-token': token
                              }
                        });

                        const result = await response.json();

                        if(mounted){
                              setPayments(result.data.results);
                        }
                  }catch(err){
                        console.log("Error",err)
                  }
            }

            if (!payments.length) {
                  fetchData();  
            }

            return () => {
                  mounted = false;
      
            }

      }, [payments]);
      
      console.log(payments)
      return payments;
}


/////////////////////////////////////////////////////////////////////////////////////////

//get orders data
export const getOrdersData = async () => {

      const [orders, setOrders] = useState([]);

      //get token from local storage
      const token = localStorage.getItem('token');

      useEffect(() => {
            let mounted = true;

            const fetchData = async () => {
                  try{
                        const response = await fetch(`${BASE_URL}/orders`, {
                              method: "GET",
                              headers: {
                                    'Content-Type': 'application/json',
                                    'x-access-token': token
                              }
                        });

                        const result = await response.json();

                        if(mounted){
                              setOrders(result.data.results);
                        }
                  }catch(err){
                        console.log("Error",err)
                  }
            }

            if (!orders.length) {
                  fetchData();  
            }

            return () => {
                  mounted = false;
      
            }

      }, [orders]);
      
      return orders;
      
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

// login user
export const loginUser = async (data) => {

      try{
            const response = await fetch(`${BASE_URL}/auth/login`, {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
            })

            const result = await response.json()
            const {accessToken} = result.data;
            return {accessToken, status: response.status};
      }catch(error){
            console.error("Error", error);
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
