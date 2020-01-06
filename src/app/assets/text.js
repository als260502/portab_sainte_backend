module.exports = {
  mailBody(cod, tel, service) {
    return (`Bom dia a todos<br>
            Financeiro,
            <p>
            Cliente de código ${cod}
            portou seu telefone para outra empresa,<br>
            favor proceder com nossas rotinas internas referente ao serviço<br>
            de telefonia, e se cabível, cobrança.
            <br>Telefone - ${tel}
            <br>Nº Serviço - ${service}
            <div style="color: red; "><h3>SOMENTE FAZER O CANCELAMENTO COM PORTABILIDADE!!! </h3></div>
            </p>
            Divulgação - Retirada de equipamentos,
            <p>
            Entrar em contato, e agendar a retirada de nosso equipamento.
            </p>
            </br>Obrigado!

            <p>Telefonia</p>
            Ajustar "ts de completamento" da portabilidade sainte.`)
  }

}

