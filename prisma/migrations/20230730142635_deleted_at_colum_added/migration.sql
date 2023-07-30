-- AlterTable
ALTER TABLE `Movie` ADD COLUMN `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Review` ADD COLUMN `deleted_at` DATETIME(3) NULL;
