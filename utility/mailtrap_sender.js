const { MailtrapClient } = require("mailtrap")

const endPoint = "https://send.api.mailtrap.io/";

const client = new MailtrapClient({endpoint, token: process.env.MAILTRAP_TOKEN})

module.exports = client;