const { client } = require('../index.js');
const chalk = require("chalk");

client.on("ready", async () => {

    console.log(chalk.cyan(`============================================`));
    console.log(chalk.cyan(`||              Medusa#0003 | Geliştirildi         ||`));
    console.log(chalk.cyan(`||       Music v12        ||`));
    console.log(chalk.cyan(`============================================`));


    await client.user.setActivity("Yeni bir bot Yapımcı: Medusa#0003", {type: "LISTENING"})


});