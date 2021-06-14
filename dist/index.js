"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const timeout = (millionSecond) => {
    const mdw = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
        const ms = +millionSecond;
        if (!isNaN(ms) && ms >= 1) {
            let timer;
            const TIMEOUT = Math.random();
            const timeout = new Promise((resolve) => {
                timer = setTimeout(() => {
                    resolve(TIMEOUT);
                }, ms);
            });
            const v = yield Promise.race([timeout, next()]);
            clearTimeout(timer);
            if (v === TIMEOUT) {
                ctx.status = 408;
                return;
            }
        }
        else {
            console.log('through');
            yield next();
        }
    });
    return mdw;
};
module.exports = timeout;
