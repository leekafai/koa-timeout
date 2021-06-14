import { Context, Next } from "koa"
import { Middleware } from "@koa/router"
/**
 * timeout middleware for koa
 */
const timeout = (millionSecond?: number): Middleware => {
  const TIMEOUT = Math.random()
  const ms = +millionSecond
  const mdw = async (ctx: Context, next: Next) => {
    if (!isNaN(ms) && ms >= 1) {
      let timer
      const timeout = new Promise((resolve) => {
        timer = setTimeout(() => {
          resolve(TIMEOUT)
        }, ms)
      })
      const v = await Promise.race([timeout, next()])
      clearTimeout(timer)
      if (v === TIMEOUT) {
        ctx.status = 408
        return
      }

    } else {
      await next()
    }
  }
  return mdw
}

export = timeout