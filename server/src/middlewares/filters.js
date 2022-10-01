//filter state

const filterState = (req, res, next) => {

    try{
        const { state } = req.query;
        const filterState = {};
        if (state) {
            filterState.state = state;
        }
        return filterState;
    }catch(err  ){
        res.status(500).json({message: err.message})
    }
}

//filter payment
const filterPayment = (req, res, next) => {

    try{
        const { paid } = req.query;
        const filterPaid = {};
        if (paid) {
            filterPaid.paid = paid === "true";
        }
        return filterPaid;
    }catch(err  ){
        res.status(500).json({message: err.message})
    }
        
    const { paid } = req.query;
}

module.exports = {
    filterPayment,
    filterState
}