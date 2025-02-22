import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { moviesTable } from './db/schema';
import { eq } from 'drizzle-orm';

const db = drizzle(process.env.DB_FILE_NAME!);

async function main() {
}
main();