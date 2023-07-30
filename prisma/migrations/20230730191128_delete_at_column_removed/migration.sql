/*
  Warnings:

  - You are about to drop the column `deleted_at` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `Review` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Movie` DROP COLUMN `deleted_at`;

-- AlterTable
ALTER TABLE `Review` DROP COLUMN `deleted_at`;
