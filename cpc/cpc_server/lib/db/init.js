

//数据库连接测试
let dbTest = (() => {
    var _ref = _asyncToGenerator(function* () {
        try {
            spinner.start();
            console.log(chalk.tips(getNowTime()) + chalk.info("正在测试数据库连接，请稍后.."));
            let res = yield db.authenticate();
            spinner.succeed(chalk.tips(getNowTime()) + chalk.success('数据库连接测试成功！'));
        } catch (err) {
            spinner.fail(chalk.tips(getNowTime()) + chalk.fail("数据库连接失败!"));
            console.error(err);
        }
    });

    return function dbTest() {
        return _ref.apply(this, arguments);
    };
})();

//数据库同步与创建原始数据


let dbCreate = (() => {
    var _ref2 = _asyncToGenerator(function* () {
        try {
            spinner.start();
            console.log(chalk.tips(getNowTime()) + chalk.info("开始同步所有数据库\n"));
            yield db.sync({ force: true });

            //创建测试数据
            let user = yield Users.create({ uid: 1, uname: 'root', upwd: '123456' });
            spinner.succeed(chalk.tips(getNowTime()) + chalk.success("Users表测试创建成功，测试案例：uname:" + user.uname));
        } catch (err) {
            spinner.fail(chalk.tips(getNowTime()) + chalk.fail("创建失败"));
            console.error(err);
        }
    });

    return function dbCreate() {
        return _ref2.apply(this, arguments);
    };
})();

let init = (() => {
    var _ref3 = _asyncToGenerator(function* () {
        yield dbTest();
        yield dbCreate();
    });

    return function init() {
        return _ref3.apply(this, arguments);
    };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//引入公共函模块
const common = require('./common');
//引入数据库
const db = require('./config');
const Users = require('./models/users');

const chalk = common.chalk;
const spinner = common.spinner;
const getNowTime = common.getNowTime;

init();