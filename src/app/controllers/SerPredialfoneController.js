const SerPredialfone = require("../models/SerPredialfone");

module.exports = {

  async getInformation(req, res) {
    console.log("/portabilidade/back/telefone")
    const { telefone } = req.body;

    //console.log(telefone);
    if (!telefone)
      return res.json({ error: "Campo telefone não pode estar vazio!!!" });

    const predialfone = await SerPredialfone.findOne({
      attributes: ["numero", "codcliente", "sip_username"],
      where: { sip_username: telefone }
    });

    if (!predialfone) return res.json({ error: "Telefone não encontrado!!!" });

    return res.json(predialfone);
  }
};
