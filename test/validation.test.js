import test from "node:test";import assert from "node:assert/strict";import {registerSchema,loginSchema,ticketSchema,updateTicketSchema} from "../src/validation.js";
test("register rejects short passwords",()=>assert.equal(registerSchema.safeParse({name:"Muzz",email:"muzz@example.com",password:"short"}).success,false));
test("login accepts valid shape",()=>assert.equal(loginSchema.safeParse({email:"muzz@example.com",password:"longpassword"}).success,true));
test("ticket rejects short message",()=>assert.equal(ticketSchema.safeParse({subject:"Help",message:"no"}).success,false));
test("ticket accepts valid message",()=>assert.equal(ticketSchema.safeParse({subject:"Billing issue",message:"Please review my last invoice."}).success,true));
test("ticket update rejects empty body",()=>assert.equal(updateTicketSchema.safeParse({}).success,false));
