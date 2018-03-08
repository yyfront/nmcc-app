const base = require('./base.config');

module.exports = Object.assign(base,{
    port: 3000,                                     //开发运行端口
    mainServer: true,
    ip: '127.0.0.1',
    host: 'localhost',                  //主机域名
    redis: {                                        //redis全局配置
        port: 6379,                                     // Redis port
        host: 'localhost',                              // Redis host
        family: 4,                                      // 4 (IPv4) or 6 (IPv6)
        // password: '',                                   // passport
        db: 0                                           // db
    },
    mysql: {
        database: 'nest_test', // 使用哪个数据库
        username: 'root', // 用户名
        password: '123456', // 口令
        host: 'localhost', // 主机名
        port: 3306 // 端口号，MySQL默认3306
    }
});