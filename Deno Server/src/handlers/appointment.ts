import { Context } from "https://deno.land/x/oak/mod.ts";
import type { Appointment } from "../types/appointment.ts";
import * as db from "../db/index.ts";

/**
 * Get Appointments
 */
export const getAppointments = async (ctx: Context) => {
  try {
    const appointments: Appointment[] = await db.findAppointments();
    ctx.response.body = appointments;
  } catch (err) {
    ctx.response.status = 404;
    ctx.response.body = { msg: err.message };
  }
};
