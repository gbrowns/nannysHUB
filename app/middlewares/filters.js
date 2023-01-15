//filter state

filterState = (req, res, next) => {

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
filterPayment = (req, res, next) => {

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

paginate = (model) => {

    return async (req, res, next) => {
        /*filter state
        const { state } = req.query;
        const filterState = {};
        if (state) {
            filterState.state = state;
        }
        //console.log(...filterState)
        //filter payment
        const { paid } = req.query;
        const filterPaid = {};
        if (paid) {
            filterPaid.paid = paid === true;
        }
        //console.log({...filterState, ...filterPaid})*/
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
        const results = {}
        if (endIndex < await model.countDocuments().exec()) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }
        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }
        try {
            results.results = await model.find().limit(limit).skip(startIndex).exec();
            //{ ...filterState, ...filterPaid }
            res.paginated = results
            next()


        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }
}

const filters = {
    filterState,
    filterPayment,
    paginate
}
module.exports = filters;