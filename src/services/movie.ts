import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { moviesTable } from '../db/schema';
import { eq, and, gte, lte } from 'drizzle-orm';

const db = drizzle(process.env.DB_FILE_NAME!);

export async function getAllMovie() {
    const movie = await db.select().from(moviesTable);
    console.log('Estrai movie ', movie);
    return movie;
}

export async function findMovieById(id: number) {
    const movieId = id;
    const movie = await db.select().from(moviesTable).where(eq(moviesTable.id, movieId));
    
    console.log('Estrai movie ', movie);
    return movie;
}


export async function storeMovie(request: any) {
    const newMovie: typeof moviesTable.$inferInsert = request;
    console.log('newMovie ', newMovie);
    const movie = await db.insert(moviesTable).values(newMovie).returning();
    console.log('movie inseriti ', movie);
    return movie;
}

export async function findMovieFromTo(from: string, to: string) {
    const dateFrom = from;
    const dateTo = to;
    const movie = await db.select().from(scheduleTable).where(and(
            gte(scheduleTable.date, parseInt(dateFrom)),
            lte(scheduleTable.date, parseInt(dateTo))
        )
    )
    
    return movie;
}