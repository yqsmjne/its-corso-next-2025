import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { schedulesTable } from '../db/schema';
import { eq, and, gte, lte } from 'drizzle-orm';

const db = drizzle(process.env.DB_FILE_NAME!);

export async function getAllSchedule() {
    const schedules = await db.select().from(schedulesTable);
    console.log('Estrai schedules ', schedules);
    return schedules;
}

export async function findSchedulesById(id: number) {
    const schedulesId = id;
    const schedules = await db.select().from(schedulesTable).where(eq(schedulesTable.id, schedulesId));
    
    console.log('Estrai schedules ', schedules);
    return schedules;
}


export async function createSchedule(request: any) {
    const newSchedule: typeof schedulesTable.$inferInsert = request;
    console.log('newSchedule ', newSchedule);
    const schedules = await db.insert(schedulesTable).values(newSchedule).returning();
    console.log('schedules inseriti ', schedules);
    return schedules;
}

