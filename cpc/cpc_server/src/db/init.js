//引入公共函模块
const common = require('./common')
//引入数据库
const db = require('./config')
const Users = require('./models/users')

const chalk = common.chalk
const spinner = common.spinner
const getNowTime = common.getNowTime

//数据库连接测试
async function dbTest() {
    try {
        spinner.start()
        console.log(chalk.tips(getNowTime()) + chalk.info("正在测试数据库连接，请稍后.."))
        let res = await db.authenticate()
        spinner.succeed(chalk.tips(getNowTime()) + chalk.success('数据库连接测试成功！'))
    } catch (err) {
        spinner.fail(chalk.tips(getNowTime()) + chalk.fail("数据库连接失败!"))
        console.error(err)
    }
}

//数据库同步与创建原始数据
async function dbCreate() {
    try {
        spinner.start()
        console.log(chalk.tips(getNowTime()) + chalk.info("开始同步所有数据库\n"))
        await db.sync({force: true})

        //创建测试数据
        let user = await Users.create({uid: 1, uname: 'root', upwd: '123456'})
        spinner.succeed(chalk.tips(getNowTime()) + chalk.success("Users表测试创建成功，测试案例：uname:" + user.uname))
        
    } catch (err) {
        spinner.fail(chalk.tips(getNowTime()) + chalk.fail("创建失败"))
        console.error(err)
    }
}
async function init () {
    await dbTest()
    await dbCreate()
}

init()


