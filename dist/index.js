"use strict";
const timeout = (millionSecond) => {
    const TIMEOUT = Math.random();
    const ms = +millionSecond;
    const mdw = async (ctx, next) => {
        if (!isNaN(ms) && ms >= 1) {
            let timer;
            const timeout = new Promise((resolve) => {
                timer = setTimeout(() => {
                    resolve(TIMEOUT);
                }, ms);
            });
            const v = await Promise.race([timeout, next()]);
            clearTimeout(timer);
            if (v === TIMEOUT) {
                ctx.status = 408;
                return;
            }
        }
        else {
            await next();
        }
    };
    return mdw;
};
module.exports = timeout;
