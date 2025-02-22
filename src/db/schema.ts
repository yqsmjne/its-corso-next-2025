import { int, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const moviesTable = sqliteTable("movies", {
    id: int("id").primaryKey({ autoIncrement: true }).notNull(),
    title: text("title").notNull(),
    genre: text("genre").notNull(),
    restriction: text("restriction").notNull(),
    language: text("language").notNull(),
    director: text("director").notNull(),
    cast: text("cast").notNull(),
    description: text("description").notNull(),
    year: int("year").notNull(),
    image_url: text("image_url").notNull(),
    duration: int("duration").notNull(),
    trailer_url: text("trailer_url").notNull(),
    rating: int("rating").notNull(),
    tags_ids: text("tags_ids").notNull(),
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
    tags_ids: text("tags_ids").notNull(),
});

export const schedulesTags = sqliteTable("schedules_tags", {
    schedule_id: int("id_schedule").notNull().references(() => schedulesTable.id, { onDelete: "cascade" }),
    tag_id: int("id_tag").notNull().references(() => tagsTable.id, { onDelete: "cascade" }),
},
    (table) => ({
        pk: primaryKey({columns: [table.schedule_id, table.tag_id]}),
    })
);

