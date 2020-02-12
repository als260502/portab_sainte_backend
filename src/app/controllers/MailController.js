const Sheduler = require("../models/Sheduler")
const nodemailer = require('nodemailer')
const mailText = require('../assets/text')

module.exports = {

  async send(req, res) {

    console.log(mailText)

    const { id } = req.params

    console.log(`/portabilidade/back/dashboard/mail/${id}`)

    const result = await Sheduler.findByPk(id)
    const { codigo, numero, telefone } = result

    if (!id) {
      res.json({ msg: "Nehum registro encontrado" })
      return;
    }
    main(id, codigo, telefone, numero).catch(console.error)



    // async..await is not allowed in global scope, must use a wrapper
    async function main(id, cod, tel, service) {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "mail.predialnet.com.br",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'andresouza@predialnet.com.br',//testAccount.user, // generated ethereal user
          pass: 'alsandre25'//testAccount.pass // generated ethereal password
        }
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Andre Souza 👻" <andresouza@predialnet.com.br>', // sender address
        //to: "andresouza@predialnet.com.br", // list of receivers
        to: "financeiro@predialnet.com.br, ret.equipamento@predialnet.com.br, comercial@predialnet.com.br", // list of receivers
        cc: "telefonia@predialnet.com.br, edsonjr@predialnet.com.br, guijunger@predialnet.com.br, lumamartins@predialnet.com.br,acm@predialnet.com.br, ",
        subject: `Portabilidade sainte - ${cod}`, // Subject line
        //text: "Hello world?", // plain text body
        html: mailText.mailBody(cod, tel, service) // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      const enviado = 1
      const update = await Sheduler.update({ enviado }, { where: { id } })
      res.json({ msg: "email enviado" })
    }
  },

  async sendAutoMail(telId, codigo, telefone, numero) {


    const id = telId

    main(id, codigo, telefone, numero).catch(console.error)

    // async..await is not allowed in global scope, must use a wrapper
    async function main(id, cod, tel, service) {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "mail.predialnet.com.br",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'andresouza@predialnet.com.br',//testAccount.user, // generated ethereal user
          pass: 'alsandre25'//testAccount.pass // generated ethereal password
        }
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Andre Souza 👻" <andresouza@predialnet.com.br>', // sender address
        //to: "andresouza@predialnet.com.br", // list of receivers
        to: "financeiro@predialnet.com.br, ret.equipamento@predialnet.com.br, comercial@predialnet.com.br", // list of receivers
        cc: "telefonia@predialnet.com.br, edsonjr@predialnet.com.br, guijunger@predialnet.com.br, lumamartins@predialnet.com.br,acm@predialnet.com.br, ",
        subject: `Portabilidade sainte - ${cod}`, // Subject line
        //text: "Hello world?", // plain text body
        html: mailText.mailBody(cod, tel, service) // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      const enviado = 1
      const update = await Sheduler.update({ enviado }, { where: { id } })

    }
  }


}