
import { db } from "@/config/db";
import { eq } from "drizzle-orm";
import { Users } from "@/config/schema"


export async function POST(req){
    const {user} = await req.json();

    try{
        const userInfo = await db.select().from(Users)
        .where(eq(Users.email,user?.primaryEmailAddress.emailAddress))
        console.log('user',userInfo.data)
    }
   catch(e){
   
   }

}

