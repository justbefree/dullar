/*
* @Author: Just be free
* @Date:   2021-05-13 09:51:02
* @Last Modified by:   Just be free
* @Last Modified time: 2021-05-13 09:51:03
* @E-mail: justbefree@126.com
*/
const qrcode = require('qrcode-terminal');
const chalk = require('chalk');
const opn = require('better-opn');
module.exports = {
  online() {
    const url = "https://lizhuang.xyz/youdefine-docs/vue2-cli/";
    console.log(chalk.yellow.bold("查看在线帮助文档\n") + chalk.green.underline(url));
    opn(url);
  }
}