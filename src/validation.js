import { z } from "zod";
export const registerSchema = z.object({name:z.string().trim().min(2).max(80),email:z.string().trim().email().max(254),password:z.string().min(8).max(128)});
export const loginSchema = z.object({email:z.string().trim().email().max(254),password:z.string().min(8).max(128)});
export const ticketSchema = z.object({subject:z.string().trim().min(3).max(160),message:z.string().trim().min(5).max(5000)});
export const updateTicketSchema = z.object({status:z.enum(["open","in_progress","resolved"]).optional(),priority:z.enum(["low","medium","high","urgent"]).optional()}).refine(v=>Object.keys(v).length>0,"Provide status or priority.");
