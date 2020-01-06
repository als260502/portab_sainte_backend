const Sheduler = require('../models/Sheduler');

module.exports = async (req, res, next) => {

  //const { page } = (req.headers) ? req.headers : 1

  const limit = 3
  const page = 2

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const resultPaginate = {}

  try {
    const result = await Sheduler.findAndCountAll({
      offset: startIndex,
      limit: limit
    })

    if (endIndex < result.count)
      resultPaginate.next = {
        page: page + 1,
        limit: limit
      }

    if (startIndex > 0) {
      resultPaginate.previous = {
        page: page - 1,
        limit: limit
      }
    }

    resultPaginate.result = result.rows
    res.paginatedResults = resresultPaginateults
    next()
  }
  catch (e) {
    res.status(500).json({ msg: e.message })
  }
}
