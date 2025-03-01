CREATE TABLE `movies_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`genre` text NOT NULL,
	`restriction` text,
	`language` text NOT NULL,
	`director` text NOT NULL,
	`description` text NOT NULL,
	`year` integer NOT NULL,
	`image_url` text NOT NULL,
	`duration` integer NOT NULL,
	`trailer_url` text,
	`rating` integer
);
--> statement-breakpoint
CREATE TABLE `users_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`age` integer NOT NULL,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_table_email_unique` ON `users_table` (`email`);