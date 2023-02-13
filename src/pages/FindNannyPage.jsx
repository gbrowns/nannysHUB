import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {useNavigate} from 'react-router-dom';

import {getNannyData, handlePaginateButton} from '../utils/Helper';

import {MdVerified} from 'react-icons/md';

function FindNannyPage() {
    const [errorMsg, setErrorMsg] = useState("");
    const [prevPage, setPrevPage] = useState(1);
    const [nextPage, setNextPage] = useState(prevPage + 1);
    const [pageNo, setPageNo] = useState(1);
    const limit = 8;
    const navigate = useNavigate();

    //const {prevPage, nextPage} = handlePaginateButton() 

    const nannies = getNannyData(pageNo, limit);

    //handle click on nanny card
    const handleNannyCardClick = (id) => {
        navigate(`/details/${id}`);
    }

    //handle pagination buttons
    const handlePaginateButton = (e) => {

        const {name, value} = e.target;
        const firstPage = 1; //prevPage
        const totalPages = 10; //nextPage

        if (name === "next" && value <= nextPage && value < totalPages){
            setPrevPage(prevPage + 1);
            setNextPage(nextPage + 1);
            setPageNo(pageNo + 1);
            //console.log("PageNo:", pageNo)
        }

        if (name === "prev" && value > firstPage ){
            setPrevPage(prevPage - 1);
            setNextPage(nextPage - 1);

            if (value >= firstPage){
                setPageNo(pageNo - 1);
            }
            //console.log("PageNo:", pageNo)
        }
    }
    
    //filter nannies by isVerified and isApproved
    //const verifiedNannies = nannies.filter(nanny => nanny.isVerified === false);

  return (
    <div className='FindNannyPage'>
        <Navbar />
        <div className="FindNannyPage__content">
            <h3> Find a Nanny</h3>

            <div className="controls">
                <select>
                    <option value="">Filter</option>
                    <option value="live-in">Live-in Nannies</option>
                    <option value="live-out">Live-out Nannies</option>
                    <option value="emmergency">Emmergency Nannies</option>
                </select>
                
                <input type="search" placeholder="Search for nanny" />
            </div>

            <div className="nanny-list">
                {
                    nannies.length ? (<Nannies nannies = {nannies} handleClick = {handleNannyCardClick}/>) : (<p>Loading...</p>)
                }
                
            </div>   

            <div className="paginate">
                <button className="btn btn-primary" name='prev' value={prevPage} onClick={handlePaginateButton}>{prevPage}</button>
                <button className="btn btn-primary" name='next' value={nextPage} onClick={handlePaginateButton}>{nextPage}</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

const Nannies = ({nannies, handleClick}) => {

    //console.log(nannies)

    return (
        <>
            {
                nannies.map((nanny) => {
                    const { _id:id, firstname, lastname, age, address, location, jobOptions, availability, agreementOptions, salary } = nanny;
            
            
                    return (
                        <div className='nanny-card' key={id} id={id} onClick={(e) => handleClick(id)} >
                            <h1>{`${firstname} ${lastname}`}</h1>
                            <div className="chores">
                                {
                                    jobOptions.map((chore,i) => <span key={i}>{chore}</span>)
                                }
                            </div>
                            <div className="details">
                                <p>Age: <span>{age}</span></p>
                                <p>Type: <span>{agreementOptions.join(", ")}</span></p>
                                <p>Location: <span>{`${address} | ${location}`}</span></p>
                                <p>Expected Salary: <span>{salary}</span></p>
                            </div>
                            <div className="controls">
                                <input type="button" value={`${firstname}'s details`} />
                                <span>
                                    <MdVerified className="icon" />
                                    Verified
                                </span>
                                
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
    
}

export default FindNannyPage;