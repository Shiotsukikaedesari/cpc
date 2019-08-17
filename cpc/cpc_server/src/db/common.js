//引入公共模块
const chalk = require('chalk')
const ora = require('ora')

//实例转轮
const spinner = ora()

//定义公告打印色
const info = chalk.blue
const warning = chalk.orange
const fail = chalk.red
const success = chalk.green
const tips = chalk.yellow

//获取当前时间
let getNowTime = () => {
    return new Date().toLocaleString() + ' '
}

const common = {
    chalk: {
        info,
        warning,
        fail,
        success,
        tips,
    },
    ora,
    spinner,
    getNowTime,
}


module.exports = common