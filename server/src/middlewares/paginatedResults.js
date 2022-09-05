
//const {filterState} = require('./filters');
//const {filterPayment} = require('./filters');

//pagination

function paginateResults(model) {

    return async (req, res, next) => {
        //filter state
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
        console.log({...filterState, ...filterPaid})
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
            results.results = await model.find({...filterState, ...filterPaid}).limit(limit).skip(startIndex).exec()
            res.paginatedResults = results
            next()


        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }
}

module.exports = paginateResults;