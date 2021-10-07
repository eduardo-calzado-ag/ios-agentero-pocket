import { Router } from "https://deno.land/x/oak/mod.ts";
import { getAppointments } from '../handlers/appointment.ts';
import { getCommisions } from '../handlers/commision.ts';
import { findQuoteProposalById } from "../handlers/quote-poroposal.ts";

export const router = new Router()
  //Appointments
  .get("/api/appointments", getAppointments)
  //Commisions
  .get("/api/commisions", getCommisions)
  //QP
  .get("/api/quote-proposals/:qpId", findQuoteProposalById);

