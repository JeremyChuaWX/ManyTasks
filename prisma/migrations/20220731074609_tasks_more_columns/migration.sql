/*
  Warnings:

  - Added the required column `done` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "description" TEXT,
ADD COLUMN     "done" BOOLEAN NOT NULL,
ADD COLUMN     "due" TIMESTAMP(3),
ADD COLUMN     "title" TEXT NOT NULL;
