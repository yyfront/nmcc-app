import { ExpressMiddleware, Middleware, NestMiddleware, Inject } from '@nestjs/common';

/**
 * 登录拦截器
 */
@Middleware()
export class SessionMiddleware implements NestMiddleware {
    private readonly sessionAuthConfig;
    constructor(@Inject('util') private readonly util) {
        // 登录拦截配置
        this.sessionAuthConfig = {

        };
    }

    public resolve(...args: any[]): ExpressMiddleware {
        return (req, res, next) => {
            const user = req.session.user;
            const service = this.util.getAction(req.path);
            const method = req.query.fn;

            if (service && method) {
                // 登录拦截判断
                if (service in this.sessionAuthConfig && this.sessionAuthConfig[service].indexOf(method) > -1) {
                    // 当前接口需要登录才能访问
                    if (user && user.id) {
                        // 已登录，通过拦截器
                        next();
                    } else {
                        // 未登录，拦截请求
                        res.json({ status: 'failed', result: 'no login' });
                        return;
                    }
                } else {
                    // 当前接口不需要登录
                    next();
                }
            } else {
                next();
            }

        };
    }
}