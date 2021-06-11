import { Middleware } from "@koa/router";
declare const timeout: (millionSecond: number) => Middleware;
export default timeout;
