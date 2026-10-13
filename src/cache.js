const entries=new Map();
export function getCache(k){const v=entries.get(k);if(!v)return;if(v.expiresAt<=Date.now()){entries.delete(k);return;}return v.value;}
export function setCache(k,value,ttl=30000){entries.set(k,{value,expiresAt:Date.now()+ttl});}
export function invalidateCache(prefix=""){for(const k of entries.keys())if(k.startsWith(prefix))entries.delete(k);}
