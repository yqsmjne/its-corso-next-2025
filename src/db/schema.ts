import { int, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";

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

export const tagsTable = sqliteTable("tags", {
    id: int("id").primaryKey({ autoIncrement: true }).notNull(),
    name: text("name").notNull(),
})

export const movieTags = sqliteTable("movies_tags", {
    movie_id: int("id_movie").notNull().references(() => moviesTable.id, { onDelete: "cascade" }),
    tag_id: int("id_tag").notNull().references(() => tagsTable.id, { onDelete: "cascade" }),
},
    (table) => ({
        pk: primaryKey({columns: [table.movie_id, table.tag_id]}),
    })
);

export const roomsTable = sqliteTable("rooms", {
    id: int("id").primaryKey({ autoIncrement: true }).notNull(),
    name: text("name").notNull(),
    available_seats: int("available_seats").notNull(),
});

export const schedulesTable = sqliteTable("schedules", {
    id: int("id").primaryKey({ autoIncrement: true }).notNull(),
    id_movie: int("id_movie").notNull().references(() => moviesTable.id, { onDelete: "cascade" }),
    id_room: int("id_room").notNull().references(() => roomsTable.id, { onDelete: "cascade" }),
    date: text("date").notNull(),
    time: text("time").notNull(),
});

export const schedulesTags = sqliteTable("schedules_tags", {
    schedule_id: int("id_schedule").notNull().references(() => schedulesTable.id, { onDelete: "cascade" }),
    tag_id: int("id_tag").notNull().references(() => tagsTable.id, { onDelete: "cascade" }),
},
    (table) => ({
        pk: primaryKey({columns: [table.schedule_id, table.tag_id]}),
    })
);