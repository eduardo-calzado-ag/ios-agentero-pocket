
import { helpers } from "https://deno.land/x/oak/mod.ts";
import { Context } from "https://deno.land/x/oak@v9.0.1/context.ts";
import * as db from "../db/index.ts";
import { QuoteProposal } from "../types/quote-propsal.ts";


export const findQuoteProposalById = async (ctx: Context) => {
    const { qpId } = helpers.getQuery(ctx, { mergeParams: true });
    console.log(qpId);
    try {
      const qp: QuoteProposal = await db.findQuoteProposalById(qpId);
      ctx.response.body = qp;
    } catch (err) {
      ctx.response.status = 404;
      ctx.response.body = { msg: err.message };
    }
  };