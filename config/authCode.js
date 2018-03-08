const routeConfig = {
    'all': '000',
    'task': '010',
    'browserTask': '011',
    'userManage': '012',
    'roleManage': '013',
    'browser': '020',
    'performance': '021',
    'business': '022',
    'analysis': '030',
    'exception': '031',
    'browserProportion': '032',
}

const operateConfig = {
    'all': '000', // 所有
    'taskPermisson': '100', // 项目添加/编辑
    'userPermisson': '101', // 账号添加/编辑
    'sensitivePermisson': '102' // 敏感信息查看
}

module.exports = {
    routeConfig: routeConfig,
    operateConfig: operateConfig
}


