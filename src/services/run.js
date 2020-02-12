const Sheduler = require('../app/models/Sheduler')
const Mail = require('../app/controllers/MailController')
const Op = require('sequelize').Op
const dbConfig = require("../database");

const telefone = async () => {

  const today = new Date();
  const actualDay = today.getDate() > 9 ? today.getDate(): `0${today.getDate()}`
  const dataAtual = `${today.getFullYear()}-0${today.getMonth() + 1}-${actualDay}`
  
  const actualHour = today.getHours() > 9 ? today.getHours(): `0${today.getHours()}`
  console.log(dataAtual, actualHour)

  const t = await Sheduler.findAll({
    attributes: ["id", "codigo", "numero", "telefone"],
    where: {
      data: dataAtual,
      enviado: 0,
      hora: { [Op.like]: `%${actualHour}%` }
    }
  })
  t.map(s => {
    Mail.sendAutoMail(s.dataValues.id, s.dataValues.codigo, s.dataValues.telefone, s.dataValues.numero)
    console.log(s.dataValues)
  })

}

telefone()
//console.log("ola nessa porra karalho")


