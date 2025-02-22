import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { roomsTable } from '../db/schema';
import { eq } from 'drizzle-orm';

const db = drizzle(process.env.DB_FILE_NAME!);

export async function getAllRooms() {
    const rooms = await db.select().from(roomsTable);
    console.log('Estrai rooms ', rooms);
    return rooms;
}

export async function findRoomsById(id: number) {
    const roomsId = id;
    const rooms = await db.select().from(roomsTable).where(eq(roomsTable.id, roomsId));
    
    console.log('Estrai rooms ', rooms);
    return rooms;
}


export async function createRooms(request: any) {
    const newRooms: typeof roomsTable.$inferInsert = request;
    console.log('newSchedule ', newRooms);
    const rooms = await db.insert(roomsTable).values(newRooms).returning();
    console.log('rooms inseriti ', rooms);
    return rooms;
}

