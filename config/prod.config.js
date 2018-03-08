const base = require('./base.config');

module.exports = Object.assign(base,{
    port: process.env.port,  //生产端口
    ip: '127.0.0.1',
    host: 'xxx.xxx.xxx'    //主机域名
});