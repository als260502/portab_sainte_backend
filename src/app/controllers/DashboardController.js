const Sheduler = require("../models/Sheduler");

module.exports = {
  async find(req, res) {

    const { id } = req.params;
    console.log(`/portabilidade/back/dashboard/find/${id}`)

    const telefone = await Sheduler.findOne({ where: { id } })

    if (!telefone) return res.json({ msg: "Este telefone nao existe", state: 0 })

    return res.json(telefone);
  },

  async delete(req, res) {

    const { id } = req.params;

    console.log(`/portabilidade/back/dashboard/delete/${id}`)

    if (id === undefined) return res.status(505).json({ msg: "Nenhum id informado", state: 0 })

    const telefone = await Sheduler.findOne({ where: { id } })
    if (!telefone) return res.json({ msg: "Este telefone nao existe", state: 0 })

    try {

      const remove = Sheduler.destroy({ where: { id } })
      return res.json({ msg: "Telefone removido com sucesso", state: 1 })

    } catch (err) {

      return res.json({ msg: `Algo deu errado!!!: ${err}`, state: 0 })
    }

    return res.json({ ok: true });
  },

  async update(req, res) {

    console.log("/portabilidade/back/dashboard/update")

    const { id, data, hora } = req.body;

    if (id === undefined) return res.status(505).json({ msg: "Nenhum telefone informado", state: 0 })

    const telefone = await Sheduler.findOne({ where: { id } })
    if (!telefone) return res.json({ msg: "Este telefone nao existe", state: 0 })

    try {

      const update = Sheduler.update(
        { data, hora },
        { where: { id } }
      )
      return res.json({ msg: "Atualizado com sucesso", state: 1 })

    } catch (err) {

      return res.json({ msg: `Algo deu errado!!!: ${err}`, state: 0 })
    }

    return res.json({ ok: true });
  },


};