CREATE TABLE burgers
(
	`id` int AUTO_INCREMENT NOT NULL,
	`burger_name` varchar(50) NOT NULL,
	`devoured` tinyint(1) DEFAULT 0,
	`date` timestamp(0) DEFAULT CURRENT_TIMESTAMP,
    `createdAt` timestamp NOT NULL DEFAULT current_timestamp,
    `updatedAt` timestamp NOT NULL DEFAULT current_timestamp,
	PRIMARY KEY(id)
);