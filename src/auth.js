import jwt from "jsonwebtoken";
export function requireAuth(req,res,next){const h=req.headers.authorization||"";if(!h.startsWith("Bearer "))return res.status(401).json({error:"Bearer token required."});try{const p=jwt.verify(h.slice(7),process.env.JWT_SECRET);req.user={id:Number(p.sub),email:p.email};next();}catch{return res.status(401).json({error:"Invalid or expired token."});}}
