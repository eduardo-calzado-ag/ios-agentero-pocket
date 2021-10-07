import { Context } from "https://deno.land/x/oak/mod.ts";
import type { Commision } from "../types/commision.ts";
import * as db from "../db/index.ts";

/**
 * Get commission
 */
export const getCommisions = async (ctx: Context) => {
  try {
    const commisions: Commision[] = await db.findCommisions();
    ctx.response.body = commisions;
  } catch (err) {
    ctx.response.status = 404;
    ctx.response.body = { msg: err.message };
  }
};
