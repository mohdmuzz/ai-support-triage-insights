import "dotenv/config";import {app} from "./app.js";
if(!process.env.JWT_SECRET||process.env.JWT_SECRET.length<24){console.error("JWT_SECRET must be at least 24 characters; set it in .env.");process.exit(1);}
const server=app.listen(Number(process.env.PORT||3000),()=>console.log("API listening on port "+(process.env.PORT||3000)));
if(process.env.ENABLE_CRON!=="false"){const {startWorker}=await import("./worker.js");startWorker();}
for(const sig of ["SIGINT","SIGTERM"])process.on(sig,()=>server.close(()=>process.exit(0)));
