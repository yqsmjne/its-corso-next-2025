CREATE TABLE `movies_tags` (
	`id_movie` integer NOT NULL,
	`id_tag` integer NOT NULL,
	PRIMARY KEY(`id_movie`, `id_tag`),
	FOREIGN KEY (`id_movie`) REFERENCES `movies_table`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`id_tag`) REFERENCES `tags`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `rooms` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`available_seats` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `schedules` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`id_movie` integer NOT NULL,
	`id_room` integer NOT NULL,
	`date` text NOT NULL,
	`time` text NOT NULL,
	`tags_ids` text NOT NULL,
	FOREIGN KEY (`id_movie`) REFERENCES `movies_table`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`id_room`) REFERENCES `rooms`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `schedules_tags` (
	`id_schedule` integer NOT NULL,
	`id_tag` integer NOT NULL,
	PRIMARY KEY(`id_schedule`, `id_tag`),
	FOREIGN KEY (`id_schedule`) REFERENCES `schedules`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`id_tag`) REFERENCES `tags`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `tags` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
DROP TABLE `users_table`;