import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
});

export const moviesTable = sqliteTable("movies_table", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  genre: text().notNull(),
  restriction: text(),
  language: text().notNull(),
  director: text().notNull(),
  description: text().notNull(),
  year: int().notNull(),
  image_url: text().notNull(),
  duration: int().notNull(),
  trailer_url: text(),
  rating: int(),
});