import { Context, Next } from "koa"
import { Middleware } from "@koa/router"
/**
 * timeout middleware for koa
 */
const timeout = (millionSecond?: number): Middleware => {
  const mdw = async (ctx: Context, next: Next) => {

    const ms = +millionSecond

    if (!isNaN(ms) && ms >= 1) {
      let timer
      const TIMEOUT = Math.random()
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
      console.log('through')
      await next()
    }
  }
  return mdw
}

export = timeout