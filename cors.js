'use strict';

module.exports = (req, res, next) => {
    res.set({
        // res.header("Access-Control-Allow-Headers","*");
        // res.header('Access-Control-Allow-Credentials', true);
        'Access-Control-Allow-Origin': req.headers['origin'] || '*',
        'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,HEAD,DELETE,PATCH',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, X-HTTP-Method-Override,Content-Type,Accept,Content-Encoding,Authorization,api-key',
        'Access-Control-Max-Age': '86400',
        'Access-Control-Allow-Credentials': true
    });
    // console.log(req.headers.cookie);
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    return next();
};
