import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { moviesTable, schedulesTable } from '../db/schema';
import { eq, and, gte, lte } from 'drizzle-orm';

const db = drizzle(process.env.DB_FILE_NAME!);

export async function getAllMovie() {
    const movie = await db.select().from(moviesTable);
    console.log('Estrai movie ', movie);
    return movie;
}

export async function getMovieToday() {
  const today = new Date().toISOString().split('T')[0];
  const movies = await db.select().from(schedulesTable).where(eq(schedulesTable.date, today));
  console.log('Movies for today: ', movies);
  return movies;
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
    const movies = await db.select().from(schedulesTable).where(
      and(
        gte(schedulesTable.date, dateFrom),
        lte(schedulesTable.date, dateTo)
      )
    );
    
    return movies;
}