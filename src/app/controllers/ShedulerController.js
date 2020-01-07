const Sheduler = require("../models/Sheduler");

module.exports = {
  async index(req, res) {
    const { itensperpage } = req.headers
    const limit = parseInt(itensperpage)
    const pageNumber = req.params.page
    //console.log(req.headers)
    const page = (pageNumber) ? parseInt(pageNumber) : '1'

    console.log(`/portabilidade/back/sheduler/${page}`)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const resultPaginate = {}

    try {
      const result = await Sheduler.findAndCountAll({
        offset: startIndex,
        limit: limit,
        order: [
          ['enviado', 'ASC']
        ]

      })

      if (endIndex < result.count)
        resultPaginate.next = {
          page: page + 1,
          limit: limit,
          totalPages: Math.ceil(result.count / limit)
        }

      if (startIndex > 0) {
        resultPaginate.previous = {
          page: page - 1,
          limit: limit
        }
      }

      resultPaginate.result = result.rows
      resultPaginate.totalPage = Math.ceil(result.count / limit)
      resultPaginate.totalFones = result.count
      //console.log(resultPaginate)
      return res.json(resultPaginate)

    }
    catch (e) {
      res.status(500).json({ msg: e.message })
    }
  },

  async store(req, res) {
    console.log("/portabilidade/back/sheduler")

    const { codigo, numero, telefone, data, hora } = req.body;

    const agenda = await Sheduler.create({
      codigo,
      numero,
      telefone,
      data,
      hora,
      enviado: "0"
    });

    if (!agenda)
      return res
        .json({ error: "Não foi possivel cadastrar agendamento" })
        .status(404);

    return res.json({ msg: "Agendado com sucesso" });
  },

};
