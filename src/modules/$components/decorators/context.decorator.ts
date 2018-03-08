import { createRouteParamDecorator } from '@nestjs/common';

interface IContext {

}

export const Context = createRouteParamDecorator((data, req) => {
    return Object.assign({

    }, {
        request: req,
        headers: req.headers,
        params: req.params,
        query: req.query,
        body: req.body,
        session: req.session,
    });
});