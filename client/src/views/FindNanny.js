import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function FindNanny() {
    const NANNIES = [
        {
            name: "Tina Kales",
            image: require('../images/nanny1.jpeg'),
            location: "Nairobi, Kenya",
            phone: "+254 712345678",
            email: "tinakales@gmail.com",
            chores: ["wash dishes", "cooking", "clean kitchen", "baby-sit"],
            age: 25,
            salary: "500/hour",
            type: ["full time", "part time"]
        },
        {
            name: "James Karanja",
            image: require('../images/nanny1.jpeg'),
            location: "Nairobi, Kenya",
            phone: "+254 712345678",
            email: "jamesk@gmail.com",
            chores: ["Gardener", "House Cleaning", "Car wash"],
            age: 25,
            salary: "1000/hour",
            type: ["full time",]
        },
        {
            name: "Tina Kales",
            image: require('../images/nanny1.jpeg'),
            location: "Nairobi, Kenya",
            phone: "+254 712345678",
            email: "tinakales@gmail.com",
            chores: ["wash dishes", "cook", "clean kitchen", "cook food"],
            age: 25,
            salary: "500/hour",
            type: ["full time", "part time", "emergency"]
        },
        {
            name: "Tina Kales",
            image: require('../images/nanny1.jpeg'),
            location: "Nairobi, Kenya",
            phone: "+254 712345678",
            email: "tinakales@gmail.com",
            chores: ["wash dishes", "cook", "clean kitchen", "cook food"],
            age: 25,
            salary: "500/hour",
            type: ["full time", "part time"]
        },
        {
            name: "Tina Kales",
            image: require('../images/nanny1.jpeg'),
            location: "Nairobi, Kenya",
            phone: "+254 712345678",
            email: "tinakales@gmail.com",
            chores: ["wash dishes", "cook", "clean kitchen", "cook food"],
            age: 25,
            salary: "500/hour",
            type: ["part time"]
        },
        {
            name: "Tina Kales",
            image: require('../images/nanny1.jpeg'),
            location: "Nairobi, Kenya",
            phone: "+254 712345678",
            email: "tinakales@gmail.com",
            chores: ["wash dishes", "cook", "clean kitchen", "cook food"],
            age: 25,
            salary: "500/hour",
            type: ["emergency"]
        }
    ]
  return (
    <div className='find-nanny-container'>
        <Banner title="Find a Nanny" image={require('../images/nanny1.jpeg')} />
        <div className="find-nanny-content">
            <div className="controls">
                <div className='category-control'>
                    <h3>Category</h3>
                    <select>
                        <option value="">Select Category</option>
                        <option value="">Live-in Nannies</option>
                        <option value="">Live-out Nannies</option>
                        <option value="">Emmergency Nannies</option>
                    </select>

                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search for nanny" />
                </div>
            </div>
            <div className="nanny-list">
                {
                    NANNIES.map((nanny, index) => {
                        const { name, image, location, chores, age, salary, type } = nanny;
                        return (
                            <div className="nanny-card">
                                {/*<img src={image} alt="nanny" width="100px" />*/}
                                <div className="nanny-card-body">
                                    <h5>{name}</h5>
                                    <div className="chores">
                                        {
                                            chores.map(chore => <span>{chore}</span>)
                                        }
                                    </div>
                                    <div className="nanny-card-footer">
                                        <p>Age: <span>{age}</span></p>
                                        <p>Type: <span>{type.join(", ")}</span></p>
                                        <p>Location: <span>{location}</span></p>
                                        <p>Expected Salary: <span>{salary}</span></p>
                                    </div>
                                    <input type="button" value={`Ask for ${name}`} />
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className="request-nanny-form">
            </div>

        </div>
        <Footer />
    </div>
  )
}

export default FindNanny