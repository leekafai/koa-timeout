import { Middleware } from "@koa/router";
/**
 * timeout middleware for koa
 */
declare const timeout: (millionSecond?: number) => Middleware;
export = timeout;
