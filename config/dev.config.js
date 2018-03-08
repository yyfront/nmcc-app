const base = require('./base.config');

module.exports = Object.assign(base,{
    port: 3000,          //开发运行端口
    ip: '127.0.0.1',
    host: 'localhost'    //主机域名
});