import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { tagsTable } from '../db/schema';
import { eq } from 'drizzle-orm';

const db = drizzle(process.env.DB_FILE_NAME!);

/* export async function getAllSchedule() {
    const schedules = await db.select().from(schedulesTable);
    console.log('Estrai schedules ', schedules);
    return schedules;
}

export async function findSchedulesById(id: number) {
    const schedulesId = id;
    const schedules = await db.select().from(schedulesTable).where(eq(schedulesTable.id, schedulesId));
    
    console.log('Estrai schedules ', schedules);
    return schedules;
} */


export async function createTags(request: any) {
    const newTags: typeof tagsTable.$inferInsert = request;
    console.log('newTags ', newTags);
    const tags = await db.insert(tagsTable).values(newTags).returning();
    console.log('tags inseriti ', tags);
    return tags;
}

