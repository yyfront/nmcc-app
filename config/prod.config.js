const base = require('./base.config');

module.exports = Object.assign(base,{
    port: parseInt(process.env.port) + parseInt(process.env.node_app_instance),                         //生产端口
    mainServer: parseInt(process.env.node_app_instance) == 0,
    ip: process.env.ip,                             //生产ip
    host: process.env.domain_sites_yyfaxapm,           //生产域名
    redis: {                                        //redis全局配置
        port: process.env.redis_port,                   // redis port
        host: process.env.redis_host,                   // redis host
        family: process.env.redis_family,               // 4 (ipv4) or 6 (ipv6)
        password: process.env.redis_password,           // passport
        db: process.env.redis_db                        // db
    },
    mysql: {
        database: process.env.mysql_database, // 使用哪个数据库
        username: process.env.mysql_username, // 用户名
        password: process.env.mysql_password, // 口令
        host: process.env.mysql_host, // 主机名
        port: process.env.mysql_port // 端口号，MySQL默认3306
    },
});